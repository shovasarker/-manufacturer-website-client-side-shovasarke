import React, { useContext } from 'react'
import CancelContext from '../../../../contexts/CancelContext'
import Button from '../../../standalone/Button'

const OrdersRow = ({ order, index }) => {
  const { img, name, price, quantity, paid, status } = order
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
          </div>
        ) : (
          <Button className={'btn-sm'}>Pay</Button>
        )}
      </td>
      <td>
        {!paid && (
          <label
            htmlFor='confirmation-modal'
            outlined
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
