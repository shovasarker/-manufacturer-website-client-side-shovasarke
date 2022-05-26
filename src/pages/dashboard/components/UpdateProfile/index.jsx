import axios from 'axios'
import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import auth from '../../../../firebase/firebase.init'
import axiosPrivate from '../../../../utilities/Axios.init'
import Button from '../../../standalone/Button'
import Input from '../../../standalone/Input'
import Spinner from '../../../standalone/Spinner'

const UpdateProfile = ({ setEdit, refetch }) => {
  const [user] = useAuthState(auth)
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async ({ image, education, phone, address, linkedIn }) => {
    setLoading(true)
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGE_STORAGE_KEY}`

    const formData = new FormData()
    formData.append('image', image[0])

    const { data } = await axios.post(url, formData)
    if (data?.success) {
      const newPart = {
        education,
        phone,
        address,
        linkedIn,
        img: data?.data?.url,
      }

      const { data: result } = await axiosPrivate.patch(
        `user/profile/${user?.email}`,
        newPart
      )

      if (result?.modifiedCount > 0) {
        reset()
        toast.success(`Profile has been Updated`)
        refetch()
        setEdit(false)
      }
    }
    setLoading(false)
  }
  return (
    <div className='my-10 lg:ml-6'>
      <h2 className='text-2xl text-neutral'>Add New Information</h2>
      <form
        className='max-w-full md:max-w-md px-5 py-8 rounded-lg shadow-xl mt-10 bg-base-100 space-y-1'
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          register={register}
          type='text'
          name='education'
          placeholder={''}
          error={errors?.education}
          label='Education'
          required={'Education is Required'}
          bordered
        />
        <Input
          register={register}
          type='text'
          name='phone'
          placeholder={''}
          error={errors?.phone}
          label='Phone Number'
          required={'Phone Number is Required'}
          bordered
        />
        <Input
          register={register}
          type='text'
          name='address'
          placeholder={''}
          error={errors?.address}
          label='Address'
          required={'Address is Required'}
          bordered
        />
        <Input
          register={register}
          type='text'
          name='linkedIn'
          placeholder={''}
          label='Linked In Profile Link'
          bordered
        />

        <Input
          register={register}
          type='file'
          name='image'
          placeholder={''}
          error={errors?.image}
          label='Profile Picture'
          required={'Profile picture is Required'}
          inputClass='!border-0 !px-0 !py-1.5'
        />

        <Button type='submit' fullWidth neutral className={'!mt-6'}>
          {loading ? <Spinner small colored /> : <>Update Profile</>}
        </Button>
      </form>
    </div>
  )
}

export default UpdateProfile
