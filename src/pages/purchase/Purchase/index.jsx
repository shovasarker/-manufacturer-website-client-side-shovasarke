import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import Spinner from '../../standalone/Spinner'
import PurchaseForm from '../PurchaseForm'

const Purchase = () => {
  const { id } = useParams()

  const getPartDetails = async () => {
    const { data } = await axios.get(
      `https://mwss-server.herokuapp.com/part/${id}`
    )
    return data
  }

  const { data: part, isLoading } = useQuery('partDetails', getPartDetails)

  if (isLoading) return <Spinner center colored />

  const { name, img, description, minOrder, inStock, price } = part

  return (
    <main className='container px-6 md:px-10 lg:px-16 xl:px-20'>
      <div className='my-10 w-full flex flex-col lg:flex-row justify-between items-start'>
        <div className='text-neutral space-y-4'>
          <img
            src={img}
            alt={name}
            className='w-full lg:w-2/5 aspect-[4/3] object-cover'
          />
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
        </div>
        <PurchaseForm part={part} />
      </div>
    </main>
  )
}

export default Purchase
