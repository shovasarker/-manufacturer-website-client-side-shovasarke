import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { Splide, SplideSlide } from '@splidejs/react-splide'

import Spinner from '../../../standalone/Spinner'

import '@splidejs/react-splide/css'
import ReviewCard from '../../../standalone/ReviewCard'
import SectionTitle from '../../../standalone/SectionTitle'

const Reviews = () => {
  const getReviews = async () => {
    const { data } = await axios.get('https://mwss-server.herokuapp.com/review')
    return data
  }

  const { data: reviews, isLoading } = useQuery('reviews', getReviews)

  if (isLoading) return <Spinner center colored />

  return (
    <section className='py-20 bg-[url(https://i.ibb.co/LY0XnCd/review-bg.jpg)] bg-no-repeat bg-fixed bg-cover bg-center'>
      <SectionTitle
        subTitle={'What our Customers Has to Say'}
        center
        className={'!text-base-100'}
      />
      <div className='container px-6 md:px-10 my-10'>
        <Splide
          aria-label='reviews'
          options={{
            rewind: true,
            gap: '1rem',
            padding: '0.5rem',
            arrows: false,
            perPage: 1,
            drag: true,
            mediaQuery: 'min',
            breakpoints: {
              768: {
                perPage: 2,
              },
              1024: {
                perPage: 3,
              },
              1280: {
                gap: '2rem',
              },
            },
          }}
        >
          {reviews?.map((review) => (
            <SplideSlide key={review?._id}>
              <ReviewCard key={review?._id} reviewData={review} cursor />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  )
}

export default Reviews
