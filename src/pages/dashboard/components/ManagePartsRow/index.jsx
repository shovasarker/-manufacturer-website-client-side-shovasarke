import React, { useContext } from 'react'
import CancelContext from '../../../../contexts/CancelContext'

const ManagePartsRow = ({ part, index }) => {
  const { setCanceled } = useContext(CancelContext)
  const { img, name, price, minOrder, inStock } = part
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
      <td>{minOrder}</td>
      <td>{inStock}</td>
      <td>
        <label
          htmlFor='confirmation-modal'
          className={
            ' btn btn-outline btn-sm !border-error !text-error hover:bg-error hover:!text-base-100'
          }
          onClick={() => setCanceled(part)}
        >
          Delete
        </label>
      </td>
    </tr>
  )
}

export default ManagePartsRow
