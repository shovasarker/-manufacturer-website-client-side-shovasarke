import React from 'react'
import notFound from '../../assets/images/error-404.jpg'

const NotFound = () => {
  return (
    <div className='container flex justify-center items-center my-20 '>
      <img
        src={notFound}
        alt='Not Found'
        className='w-full md:w-1/2 lg:w-1/3'
      />
    </div>
  )
}

export default NotFound
