import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import axiosPrivate from '../../../../utilities/Axios.init'
import Spinner from '../../../standalone/Spinner'

const CheckoutForm = ({ booking }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [cardError, setCardError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [transactionId, setTransactionId] = useState('')
  const [clientSecret, setClientSecret] = useState('')
  const { _id, price, quantity, customerName, email } = booking
  useEffect(() => {
    const getClientSecret = async () => {
      try {
        const { data } = await axiosPrivate.post('create-payment-intent', {
          price: price * quantity,
        })

        setClientSecret(data?.clientSecret)
      } catch (error) {
        if (
          error?.response?.status === 401 ||
          error?.response?.status === 403
        ) {
          toast?.error(error?.message)
        }
      }
    }
    getClientSecret()
  }, [price, quantity])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) return

    const card = elements.getElement(CardElement)

    if (card == null) return

    const { error } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    })

    if (error) {
      setCardError(error?.message)
      return
    }
    setCardError('')
    setLoading(true)
    //   confirm card Payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: customerName,
            email: email,
          },
        },
      })

    if (intentError) {
      setCardError(intentError?.message)
      setSuccess('')
    } else {
      setCardError('')
      setSuccess('Congrats! Your Payment is Completed.')
      setTransactionId(paymentIntent?.id)
      const payment = {
        bookingId: _id,
        transactionId: paymentIntent?.id,
      }

      try {
        const { data } = await axiosPrivate.patch(`order/${_id}`, payment)
        console.log(data)
        if (data?.modifiedCount > 0) {
          toast?.success('Congrats! Your Payment is Completed.')
        }
      } catch (error) {
        console.log(error)
      }
    }
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button
        type='submit'
        disabled={!stripe || !clientSecret || success}
        className='btn btn-secondary btn-sm text-base-100 !px-4'
      >
        {loading ? <Spinner small /> : <>Pay</>}
      </button>
      {cardError && (
        <p className='text-red-500 text-center text-xs'>{cardError}</p>
      )}
      {success && (
        <div className='text-center text-sm text-success'>
          <p>{success}</p>
          <p>
            Your Transaction Id :{' '}
            <span className='text-orange-500'>{transactionId}</span>
          </p>
        </div>
      )}
    </form>
  )
}

export default CheckoutForm
