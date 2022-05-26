import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import CancelContext from '../../../../contexts/CancelContext'
import axiosPrivate from '../../../../utilities/Axios.init'
import Button from '../../../standalone/Button'
import Spinner from '../../../standalone/Spinner'

const ManageOrdersRow = ({ order, index, refetch }) => {
  const {
    _id,
    img,
    name,
    price,
    quantity,
    paid,
    status,
    transactionId,
    customerName,
    email,
  } = order
  const { setCanceled } = useContext(CancelContext)
  const [loading, setLoading] = useState(false)

  const handleCancelOrder = () => {
    setCanceled(order)
  }

  const handleShippedParts = async () => {
    setLoading(true)
    const { data } = await axiosPrivate.patch(`order/status/${_id}`)

    if (data?.modifiedCount > 0) {
      toast?.success("The Order's Status Changed to Shipped")
      refetch()
    }
    setLoading(false)
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
        <p title={name}>
          {name?.length > 15 ? name?.slice(0, 14) + ' . . .' : name}
        </p>
      </td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <div>
          <p>{customerName}</p>
          <p>{email}</p>
        </div>
      </td>

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
          <p>Unpaid</p>
        )}
      </td>
      <td>
        {status?.toLowerCase() !== 'shipped' && paid ? (
          <Button className={'!btn-sm !text-sm'} onClick={handleShippedParts}>
            {loading ? <Spinner small /> : <>Shipped Parts</>}
          </Button>
        ) : (
          <></>
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

export default ManageOrdersRow
