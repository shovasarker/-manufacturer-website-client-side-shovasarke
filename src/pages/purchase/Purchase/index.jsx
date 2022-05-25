import axios from 'axios'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import axiosPrivate from '../../../utilities/Axios.init'
import Button from '../../standalone/Button'
import Spinner from '../../standalone/Spinner'

const Purchase = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(0)
  const [loading, setLoading] = useState(false)
  const [bookingId, setBookingId] = useState('')

  const getPartDetails = async () => {
    const { data } = await axios.get(
      `https://mwss-server.herokuapp.com/part/${id}`
    )
    setQuantity(data?.minOrder)
    return data
  }

  const { data: part, isLoading } = useQuery('partDetails', getPartDetails)

  if (isLoading) return <Spinner center colored />

  const { name, img, description, minOrder, inStock, price } = part

  const handleDecreaseQuantity = () => {
    if (quantity <= minOrder) return
    setQuantity(quantity - 1)
  }
  const handleIncreaseQuantity = () => {
    if (quantity >= inStock) return
    setQuantity(quantity + 1)
  }

  const handleChange = (e) => {
    const parseQuantity = parseInt(e.target.value)
    if (isNaN(parseQuantity)) {
      setQuantity(1)
      return
    }

    setQuantity(parseQuantity)
  }

  const handleBooking = async () => {
    if (bookingId) return

    if (quantity < minOrder || quantity > inStock) {
      toast.warning(
        `Please Select Order Quantatiy Between ${minOrder} & ${inStock}`
      )
      return
    }

    setLoading(true)
    const newOrder = {
      partId: part?._id,
      name,
      price,
      quantity: quantity,
    }
    const { data } = await axiosPrivate.post('/order', newOrder)

    if (data?.insertedId) {
      toast.success(
        'Your Order is Booked. Please Pay within 24 Hours or It will be Cancelled.'
      )
      setBookingId(data?.insertedId)
    }
    setLoading(false)

    return data?.insertedId
  }

  const handlePayment = async () => {
    if (!bookingId) {
      const id = await handleBooking()
      navigate(`/dasboard/payment/${id}`)
    }
    if (bookingId) {
      console.log(bookingId)
      navigate(`/dasboard/payment/${bookingId}`)
    }
  }

  return (
    <main className='container px-6 md:px-10 lg:px-16 xl:px-20'>
      <div className='my-10 w-full flex flex-col lg:flex-row-reverse justify-between items-start'>
        <img
          src={img}
          alt={name}
          className='w-full lg:w-2/5 aspect-[4/3] object-cover'
        />
        <div className='text-neutral space-y-4'>
          <h2 className='text-3xl font-semibold '>{name}</h2>
          <p className='text-lg font-medium !mt-5'>{description}</p>
          <p className='text-lg'>
            Minimum Order :{' '}
            <span className='font-medium'>{minOrder} (unit)</span>
          </p>
          <p className='text-lg'>
            Available : <span className='font-medium'>{inStock} (unit)</span>
          </p>
          <p className='text-lg'>
            Price : <span className='font-medium'>${price} (per unit)</span>
          </p>
          <p className='text-lg'>Select Quantiy : </p>
          <div className='flex justify-start items-center gap-2'>
            <Button neutral onClick={handleDecreaseQuantity}>
              -
            </Button>
            <input
              type={'number'}
              value={quantity}
              className='input input-bordered w-20'
              onChange={handleChange}
            />
            <Button neutral onClick={handleIncreaseQuantity}>
              +
            </Button>
          </div>
          <div className='flex flex-col md:flex-row justify-start items-center gap-2'>
            <Button
              neutral
              className={`!w-full md:!w-1/2 `}
              onClick={handleBooking}
              disabled={bookingId || quantity < minOrder || quantity > inStock}
            >
              {loading ? <Spinner colored small /> : <>Add to My Order</>}
            </Button>
            <Button className={'!w-full md:!w-2/5'} onClick={handlePayment}>
              Pay Now
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Purchase
