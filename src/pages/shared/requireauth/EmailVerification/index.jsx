import React from 'react'
import Button from '../../../standalone/Button'

const EmailVerifcation = () => {
  return (
    <div className='card max-w-full md:max-w-sm bg-base-100 shadow-2xl mx-auto'>
      <div className='card-body text-center'>
        <h2 className='text-2xl font-semibold text-center'>
          Email is Not Verified!
        </h2>
        <p>Please Verify Your Email First to See More Content!</p>
        <Button className={'mx-auto'}>Send Verification Email</Button>
      </div>
    </div>
  )
}

export default EmailVerifcation
