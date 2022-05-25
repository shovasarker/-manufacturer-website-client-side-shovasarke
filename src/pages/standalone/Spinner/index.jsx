import React from 'react'

const Spinner = ({ small, colored, center }) => {
  return (
    <div
      className={`${
        center ? 'w-full h-96 flex justify-center items-center' : 'mx-auto'
      }`}
    >
      <div
        className={`${small ? 'w-5 h-5' : 'w-8 h-8'} border-2 ${
          colored ? 'border-secondary' : 'border-neutral'
        } border-b-transparent rounded-full animate-spin`}
      ></div>
    </div>
  )
}

export default Spinner
