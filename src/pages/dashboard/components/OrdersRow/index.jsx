import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import CancelContext from '../../../../contexts/CancelContext'
import Button from '../../../standalone/Button'

const OrdersRow = ({ order, index }) => {
  const navigate = useNavigate()
  const { _id, img, name, price, quantity, paid, status, transactionId } = order
  const { setCanceled } = useContext(CancelContext)

  const handleCancelOrder = () => {
    setCanceled(order)
  }

  return (
    <tr>
      <th>{index}</th>
      <td>
        <div className='avatar'>
          <div className='mask mask-squircle w-12 h-12'>
            <img src={img} alt={name} />
          </div>
        </div>
      </td>
      <td>
        <p>{name}</p>
      </td>
      <td>{price}</td>
      <td>{quantity}</td>

      <td>{status}</td>
      <td>
        {paid ? (
          <div>
            <p className='text-success'>Paid</p>
            <small>
              t_id: <span className='text-success'>{transactionId}</span>
            </small>
          </div>
        ) : (
          <Button
            className={'btn-sm'}
            onClick={() => navigate(`/dashboard/payment/${_id}`)}
          >
            Pay
          </Button>
        )}
      </td>
      <td>
        {!paid && (
          <label
            htmlFor='confirmation-modal'
            className={
              ' btn btn-outline btn-sm !border-error !text-error hover:bg-error hover:!text-base-100'
            }
            onClick={handleCancelOrder}
          >
            Cancel
          </label>
        )}
      </td>
    </tr>
  )
}

export default OrdersRow
