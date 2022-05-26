import React, { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import CancelContext from '../../../../contexts/CancelContext'
import auth from '../../../../firebase/firebase.init'
import axiosPrivate from '../../../../utilities/Axios.init'
import SectionTitle from '../../../standalone/SectionTitle'
import Spinner from '../../../standalone/Spinner'
import ConfirmationModal from '../ConfirmationModal'
import ManageOrdersRow from '../ManageOrdersRow'

const ManageOrders = () => {
  const [user] = useAuthState(auth)
  const { canceled } = useContext(CancelContext)
  const getOrders = async () => {
    const { data } = await axiosPrivate.get(`order`)
    return data
  }

  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery(['orders', user?.email], getOrders)

  if (isLoading) return <Spinner center colored />
  return (
    <div className='my-10'>
      <SectionTitle subTitle={'All Orders'} className='text-neutral' />
      <div className='overflow-x-auto w-full my-10 text-neutral'>
        <table className='table table-compact w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Parts Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Payment</th>
              <th>Shipping</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <ManageOrdersRow
                key={order?._id}
                order={order}
                index={index + 1}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
        {!orders?.length && (
          <p className='text-center text-neutral my-10'>
            No Order has been placed till Now.
          </p>
        )}
      </div>
      {canceled?._id && <ConfirmationModal refetch={refetch} />}
    </div>
  )
}

export default ManageOrders
