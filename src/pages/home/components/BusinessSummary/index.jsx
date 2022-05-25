import React from 'react'
import { IoIosPerson } from 'react-icons/io'
import { GiMoneyStack, GiMicrochip } from 'react-icons/gi'
import { MdRateReview } from 'react-icons/md'
import SectionTitle from '../../../standalone/SectionTitle'

const BusinessSummary = () => {
  return (
    <section className='container px-6 md:px-10 lg:px-16 xl:px-20 py-10'>
      <SectionTitle subTitle={'Our Customers Trust Us'} center />
      <div className='w-full stats stats-vertical md:stats-horizontal shadow mx-auto text-neutral my-10'>
        <div className='stat justify-items-center'>
          <IoIosPerson className='w-12 h-12' />
          <div className='stat-value'>100+</div>
          <div className='stat-title mt-2'>Customers</div>
        </div>

        <div className='stat justify-items-center'>
          <GiMoneyStack className='w-12 h-12' />
          <div className='stat-value'>10M+</div>
          <div className='stat-title mt-2'>Annual revenue</div>
        </div>

        <div className='stat justify-items-center'>
          <MdRateReview className='w-12 h-12' />
          <div className='stat-value'>1K+</div>
          <div className='stat-title mt-2'>Reviews</div>
        </div>

        <div className='stat justify-items-center'>
          <GiMicrochip className='w-12 h-12' />
          <div className='stat-value'>20+</div>
          <div className='stat-title mt-2'>Parts</div>
        </div>
      </div>
    </section>
  )
}

export default BusinessSummary
