import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

import Button from '../../../standalone/Button'

const Banner = () => {
  return (
    <section className='bg-[url(https://i.ibb.co/6vHXpt9/banner-2-filter.jpg)] bg-no-repeat bg-fixed w-full h-full xl:h-screen bg-cover bg-center flex justify-center items-center py-8 px-6'>
      <div className='hero-content text-center py-8'>
        <div className='max-w-xl text-base-100'>
          <h1 className='text-4xl leading-tight lg:text-5xl lg:leading-tight xl:text-6xl xl:leading-tight font-bold uppercase'>
            Computer Parts Manufacturer
          </h1>
          <p className='py-6 text-xl lg:text-2xl font-bold'>
            With Over 10 Years of Experience
          </p>
          <Button>
            <span>Contact Us</span>
            <AiOutlineArrowRight className='ml-2 w-5 h-5' />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Banner
