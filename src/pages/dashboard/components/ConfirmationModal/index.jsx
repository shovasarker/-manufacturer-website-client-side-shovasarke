import React, { useContext } from 'react'
import { toast } from 'react-toastify'
import CancelContext from '../../../../contexts/CancelContext'
import axiosPrivate from '../../../../utilities/Axios.init'

const ConfirmationModal = ({ refetch }) => {
  const { canceled, setCanceled } = useContext(CancelContext)
  const handleDelete = async () => {
    const { data } = await axiosPrivate.delete(`order/${canceled?._id}`)
    if (data?.deletedCount) {
      toast.success(`The Order has been Canceled`)
      refetch()
      setCanceled({})
    }
  }
  return (
    <>
      <input type='checkbox' id='confirmation-modal' className='modal-toggle' />
      <div className='modal modal-bottom sm:modal-middle !z-50'>
        <div className='modal-box'>
          <h3 className='font-bold text-2xl text-error'>Warning!</h3>
          <p className='mt-4'>Do you Really Want to Cancel Order?</p>
          <div className='modal-action'>
            <button className='btn btn-error btn-sm' onClick={handleDelete}>
              Yes
            </button>
            <label
              htmlFor='confirmation-modal'
              className='btn btn-outline btn-sm'
              onClick={() => setCanceled({})}
            >
              No
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConfirmationModal
