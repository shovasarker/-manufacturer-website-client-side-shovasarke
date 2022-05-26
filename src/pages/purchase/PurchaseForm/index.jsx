import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import auth from '../../../firebase/firebase.init'
import axiosPrivate from '../../../utilities/Axios.init'
import Button from '../../standalone/Button'
import ControlledInput from '../../standalone/ControlledInput'
import Spinner from '../../standalone/Spinner'

const PurchaseForm = ({ part }) => {
  const { name, img, minOrder, inStock, price } = part

  const navigate = useNavigate()
  const [user] = useAuthState(auth)
  const [quantity, setQuantity] = useState(minOrder)
  const [loading, setLoading] = useState(false)
  const [bookingId, setBookingId] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')

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

    if (!address || !phone) {
      toast?.warning('Both Adddress and Phone Number Must be Given.')
      return
    }

    setLoading(true)
    const newOrder = {
      partId: part?._id,
      img,
      name,
      price,
      quantity: quantity,
      customerName: user?.displayName,
      email: user?.email,
      address: address,
      phone: phone,
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
    <div className='w-full lg:w-1/2 space-y-2 text-neutral'>
      <h3 className='text-2xl font-medium'>Enter Your Information</h3>
      <ControlledInput
        type={'text'}
        label='Name'
        placeholder={'Name'}
        value={user?.displayName}
        readOnly
        bordered
        inputClass={'!bg-primary/10'}
      />
      <ControlledInput
        type={'email'}
        label='Email'
        placeholder={'Email'}
        value={user?.email}
        readOnly
        bordered
        inputClass={'!bg-primary/10'}
      />
      <ControlledInput
        type={'text'}
        label='Phone Number'
        placeholder={'phone'}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        bordered
        required
      />
      <ControlledInput
        type={'text'}
        label='Address'
        placeholder={'Address'}
        value={address}
        bordered
        onChange={(e) => setAddress(e.target.value)}
        required
      />
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
  )
}

export default PurchaseForm
