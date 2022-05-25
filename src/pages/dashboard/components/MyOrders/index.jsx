import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import auth from '../../../../firebase/firebase.init'
import axiosPrivate from '../../../../utilities/Axios.init'
import SectionTitle from '../../../standalone/SectionTitle'
import Spinner from '../../../standalone/Spinner'
import OrdersRow from '../OrdersRow'

const MyOrders = () => {
  const [user] = useAuthState(auth)
  const getOrders = async () => {
    const { data } = await axiosPrivate.get(`order/${user?.email}`)
    return data
  }

  const { data: orders, isLoading } = useQuery(
    ['orders', user?.email],
    getOrders
  )

  if (isLoading) return <Spinner center colored />
  return (
    <div className='my-10'>
      <SectionTitle subTitle={'My Orders'} className='text-neutral' />
      <div class='overflow-x-auto w-full my-10 text-neutral'>
        <table class='table table-compact w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Parts Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Payment</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <OrdersRow key={order?._id} order={order} index={index + 1} />
            ))}
          </tbody>
        </table>
        {!orders?.length && (
          <p className='text-center text-neutral my-10'>
            You Didnot place any order till Now.
          </p>
        )}
      </div>
    </div>
  )
}

export default MyOrders
