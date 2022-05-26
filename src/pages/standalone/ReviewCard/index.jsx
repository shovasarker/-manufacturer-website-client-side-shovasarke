import React from 'react'
import Rating from 'react-rating'
import { FaStar, FaRegStar } from 'react-icons/fa'

import blankProfile from '../../../assets/images/blank-profile.svg'

const ReviewCard = ({ reviewData, cursor }) => {
  const { name, email, address, img, review, rating } = reviewData
  return (
    <div
      className={`${
        cursor ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer'
      } h-full w-full flex flex-col justify-between items-start`}
    >
      <div className='p-4 bg-base-100 rounded-lg shadow-xl'>
        <p className='text-base tracking-wider font-medium text-neutral'>
          {review}
        </p>
        <div className='flex justify-start items-center gap-2 mt-3 text-neutral'>
          <p className='font-mono'>Rating:</p>
          <Rating
            className='!flex !justify-center !items-center !gap-1'
            initialRating={rating}
            fullSymbol={<FaStar className='w-5 h-5' />}
            emptySymbol={<FaRegStar className='w-5 h-5' />}
            readonly
          />
        </div>
      </div>
      <div className='my-5 w-full flex justify-start items-center gap-3 text-base-100 flex-shrink-0'>
        <div className='avatar'>
          <div className='w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
            <img src={img ? img : blankProfile} alt={name} />
          </div>
        </div>
        <div className='bg-black/30 px-3 py-1.5 rounded-lg flex-grow'>
          <h4 className='text-lg font-semibold'>{name}</h4>
          <p className='break-words'>{email}</p>
          <p>{address ? address : ''}</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
