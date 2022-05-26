import React, { useContext } from 'react'
import CancelContext from '../../../../contexts/CancelContext'

const UsersRow = ({ user, index }) => {
  const { displayName, email, role } = user
  const { setSelectedUser } = useContext(CancelContext)
  return (
    <tr>
      <td>{index}</td>
      <td>{displayName}</td>
      <td>{email}</td>
      <td>
        {role === 'admin' ? (
          <p className=''>Admin</p>
        ) : (
          <label
            htmlFor='make-admin-modal'
            className={'btn btn-primary !btn-sm text-base-100'}
            onClick={() => setSelectedUser(user)}
          >
            Make Admin
          </label>
        )}
      </td>
    </tr>
  )
}

export default UsersRow
