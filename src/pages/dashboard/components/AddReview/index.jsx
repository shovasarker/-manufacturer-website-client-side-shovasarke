import { format } from 'date-fns'
import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import auth from '../../../../firebase/firebase.init'
import axiosPrivate from '../../../../utilities/Axios.init'
import Button from '../../../standalone/Button'
import Input from '../../../standalone/Input'
import SectionTitle from '../../../standalone/SectionTitle'
import Spinner from '../../../standalone/Spinner'
import TextArea from '../../../standalone/TextArea'

const AddReview = () => {
  const [user] = useAuthState(auth)
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      review: '',
      rating: 1,
    },
  })

  const addReview = async (review, rating) => {
    setLoading(true)
    const newReview = {
      name: user?.displayName,
      email: user?.email,
      address: '',
      img: '',
      review: review,
      rating: rating,
      createdAt: format(new Date(), 'T'),
    }

    const { data } = await axiosPrivate.post('review', newReview)
    if (data?.insertedId) {
      reset()
      toast.success('Your Review Added SuccessFully')
    }
    setLoading(false)
  }

  const onSubmit = ({ review, rating }) => {
    const parseRating = parseFloat(rating)
    if (isNaN(parseRating)) return
    addReview(review, parseRating)
  }
  return (
    <div className='my-10 px-6'>
      <SectionTitle subTitle={'Review '} />
      <form
        className='mt-10 space-y-1 w-full md:max-w-md'
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextArea
          type={'text'}
          name='review'
          label={'Review'}
          placeholder='Enter Your Review'
          error={errors?.review}
          register={register}
          required='Review field cannot be empty!'
          minLength={{
            value: 50,
            message: 'Review Must be Atleast 50 charcters Long.',
          }}
        />

        <Input
          type={'number'}
          name='rating'
          label={'Rating (1 to 5)'}
          placeholder='Rating'
          register={register}
          required='Rating is Required'
          min={{ value: 1, message: 'Minimum Value of Rating Must be 1' }}
          max={{ value: 5, message: 'Maximum Value of Rating Must be 5.' }}
          step='0.5'
          bordered
        />
        {/* {error && (
        <p className='text-error text-center text-xs'>{error?.message}</p>
      )} */}
        <Button type='submit' fullWidth neutral className={'!mt-4'}>
          {loading ? <Spinner small colored /> : <>Add Review</>}
        </Button>
      </form>
    </div>
  )
}

export default AddReview
