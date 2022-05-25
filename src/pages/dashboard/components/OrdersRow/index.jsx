import React from 'react'
import Button from '../../../standalone/Button'

const OrdersRow = ({ order, index }) => {
  const { img, name, price, quantity, paid, status } = order
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
      <td>
        {paid ? (
          <div>
            <p className='text-success'>Paid</p>
          </div>
        ) : (
          <Button className={'btn-sm'}>Pay</Button>
        )}
      </td>

      <td>{status}</td>
    </tr>
  )
}

export default OrdersRow
