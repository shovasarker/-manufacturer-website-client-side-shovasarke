import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Input from '../../standalone/Input'

const SearchBar = () => {
  const { handleSubmit, register } = useForm()
  const navigate = useNavigate()

  const onSubmit = (data) => {
    navigate(`/search/${data?.search}`)
  }
  return (
    <section className='my-10 container px-6 md:px-10 lg:px-16 xl:px-20'>
      <form
        className='w-full md:w-1/2 mx-auto'
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          type={'text'}
          name='search'
          register={register}
          required='Search Text Cannot be Empty!'
          placeholder={'Search Any Parts Name'}
          bordered
          inputClass={'rounded-full md:!py-3 !h-auto'}
          className='w-full'
        />
      </form>
    </section>
  )
}

export default SearchBar
