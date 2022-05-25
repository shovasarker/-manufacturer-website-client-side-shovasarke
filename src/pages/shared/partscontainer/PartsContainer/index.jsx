import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import Spinner from '../../../standalone/Spinner'
import PartCard from '../PartCard'

const PartsContainer = ({ perPage, glass }) => {
  const getParts = async () => {
    const { data } = await axios.get('https://mwss-server.herokuapp.com/part')

    return data
  }

  const { data: parts, isLoading } = useQuery('parts', getParts)

  if (isLoading) return <Spinner center colored />

  return (
    <>
      {parts?.length > 0 ? (
        <div className='container px-6 md:px-10 lg:px-16 xl:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10 my-10'>
          {parts
            ?.filter((p, i) => (perPage ? i < perPage : i >= 0))
            ?.map((part) => (
              <PartCard key={part?._id} part={part} glass={glass} />
            ))}
        </div>
      ) : (
        <h2 className='text-xl text-center my-20'>No Data Found</h2>
      )}
    </>
  )
}

export default PartsContainer
