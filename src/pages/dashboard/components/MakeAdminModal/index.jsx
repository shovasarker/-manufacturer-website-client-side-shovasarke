import React, { useContext } from 'react'
import { toast } from 'react-toastify'
import CancelContext from '../../../../contexts/CancelContext'
import axiosPrivate from '../../../../utilities/Axios.init'

const MakeAdminModal = ({ refetch }) => {
  const { selectedUser, setSelectedUser } = useContext(CancelContext)
  const handleMakeAdmin = async () => {
    const { data } = await axiosPrivate.put(`user/admin/${selectedUser?.email}`)
    if (data?.result?.modifiedCount) {
      toast.success(`${selectedUser?.displayName} is Now an admin`)
      refetch()
      setSelectedUser({})
    }

    if (data?.accessToken) {
      localStorage.setItem('accessToken', data?.accessToken)
    }
  }
  return (
    <>
      <input type='checkbox' id='make-admin-modal' className='modal-toggle' />
      <div className='modal modal-bottom sm:modal-middle !z-50'>
        <div className='modal-box'>
          <h3 className='font-bold text-2xl text-error'>Warning!</h3>
          <p className='mt-4'>
            Do you Really Want to Make{' '}
            <span className='font-bold'>{selectedUser?.displayName}</span> an
            Admin?
          </p>
          <div className='modal-action'>
            <button className='btn btn-error btn-sm' onClick={handleMakeAdmin}>
              Yes
            </button>
            <label
              htmlFor='make-admin-modal'
              className='btn btn-outline btn-sm'
              onClick={() => setSelectedUser({})}
            >
              No
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default MakeAdminModal
