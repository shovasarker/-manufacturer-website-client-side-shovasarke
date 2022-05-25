import React from 'react'

const ReviewCard = ({ reviewData, cursor }) => {
  const { name, email, address, img, review } = reviewData
  return (
    <div
      className={`${
        cursor ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer'
      }`}
    >
      <div className='p-4 bg-base-100 rounded-lg'>
        <p className='text-base tracking-wider font-medium text-neutral'>
          {review}
        </p>
      </div>
      <div className='my-5 flex justify-start items-center gap-3 text-base-100'>
        <div className='avatar'>
          <div className='w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
            <img src={img} alt={name} />
          </div>
        </div>
        <div className='bg-black/10 px-3 py-1.5 rounded-lg'>
          <h4 className='text-lg font-semibold'>{name}</h4>
          <p>{email}</p>
          <p>{address}</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
