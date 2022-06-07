import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Button from '../../../standalone/Button'
import SectionTitle from '../../../standalone/SectionTitle'

const Popular = () => {
  const navigate = useNavigate()
  return (
    <section className='bg-neutral'>
      <div className='container px-6 md:px-10 lg:px-16 xl:px-20 h-auto py-10'>
        <SectionTitle
          subTitle={'Our Most Popular Computer Part'}
          center
          className={'!text-base-100'}
        />
        <div className='w-full flex flex-col lg:flex-row justify-between items-center gap-5 my-10'>
          <img
            src='https://i.ibb.co/XyLKWsg/ram-2.jpg'
            alt='4 GB DDR4 RAM'
            className='w-full md:w-1/2 lg:w-2/5 rounded-lg shadow-2xl'
          />
          <div className='w-full lg:w-1/2 text-base-100'>
            <h1 className='text-5xl font-bold'>4 GB DDR4 RAM</h1>
            <p className='mt-6'>DDR4 PC4-21300 (2666 MHz), 260-Pin SO-DIMM</p>
            <p className='mt-3'>
              Price : <span className='font-semibold'>$39</span>
            </p>
            <p className='mt-3'>
              Average Sells :{' '}
              <span className='font-semibold'>250 (unit per month)</span>
            </p>
            <Button
              outlined
              className={
                '!border-white !text-white hover:!bg-base-100 hover:!text-neutral !flex !mt-6'
              }
              onClick={() => navigate('/parts')}
            >
              <span>View All</span>
              <AiOutlineArrowRight className='ml-2 w-5 h-5' />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Popular
