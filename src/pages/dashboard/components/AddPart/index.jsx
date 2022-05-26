import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import axiosPrivate from '../../../../utilities/Axios.init'
import Button from '../../../standalone/Button'
import Input from '../../../standalone/Input'
import Spinner from '../../../standalone/Spinner'
import TextArea from '../../../standalone/TextArea'

const AddPart = () => {
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async ({
    name,
    description,
    price,
    minOrder,
    inStock,
    image,
  }) => {
    setLoading(true)
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGE_STORAGE_KEY}`

    const formData = new FormData()
    formData.append('image', image[0])

    const { data } = await axios.post(url, formData)
    if (data?.success) {
      const newPart = {
        name,
        description,
        price,
        minOrder,
        inStock,
        img: data?.data?.url,
      }

      const { data: result } = await axiosPrivate.post('part', newPart)

      if (result?.insertedId) {
        reset()
        toast.success(`${name} has been added as a doctor`)
      }
    }
    setLoading(false)
  }

  return (
    <div className='my-10 lg:ml-6'>
      <h2 className='text-2xl text-neutral'>Add New Part's Information</h2>
      <form
        className='max-w-full md:max-w-md px-5 py-8 rounded-lg shadow-xl mt-10 bg-base-100 space-y-1'
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          register={register}
          type='text'
          name='name'
          placeholder={''}
          error={errors?.name}
          label='Name'
          required={'Name is Required'}
          bordered
        />
        <TextArea
          register={register}
          type='text'
          name='description'
          placeholder={''}
          error={errors?.description}
          label='Description'
          required={'Description is Required'}
        />
        <Input
          register={register}
          type='number'
          name='price'
          placeholder={''}
          error={errors?.price}
          label='Price'
          required={'Price is Required'}
          bordered
        />
        <Input
          register={register}
          type='number'
          name='minOrder'
          placeholder={''}
          error={errors?.minOrder}
          label='Minimum Order'
          required={'Minimum Order is Required'}
          bordered
        />
        <Input
          register={register}
          type='number'
          name='inStock'
          placeholder={''}
          error={errors?.inStock}
          label='Available In Stock'
          required={'Available In Stock is Required'}
          bordered
        />

        <Input
          register={register}
          type='file'
          name='image'
          placeholder={''}
          error={errors?.image}
          label='Image'
          required={'Image is Required'}
          inputClass='!border-0 !px-0 !py-1.5'
        />

        <Button type='submit' fullWidth neutral className={'!mt-6'}>
          {loading ? <Spinner small colored /> : <>Add Part</>}
        </Button>
      </form>
    </div>
  )
}

export default AddPart
