import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import auth from '../../../../firebase/firebase.init'
import axiosPrivate from '../../../../utilities/Axios.init'
import ReviewCard from '../../../standalone/ReviewCard'
import SectionTitle from '../../../standalone/SectionTitle'
import Spinner from '../../../standalone/Spinner'

const MyReviews = () => {
  const [user] = useAuthState(auth)

  const getReviews = async () => {
    const { data } = await axiosPrivate.get(`review/${user?.email}`)
    console.log(data)
  }

  const { data: reviews, isLoading } = useQuery(
    ['reiews', user?.email],
    getReviews
  )

  if (isLoading) return <Spinner center colored />

  return (
    <div className='my-10'>
      <SectionTitle subTitle={'My Reviews'} />
      {reviews?.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
          {reviews?.map((review) => (
            <ReviewCard key={review?._id} reviewData={review} />
          ))}
        </div>
      ) : (
        <h4 className='text-center text-lg text-neutral my-10'>
          You Haven't give any reviews yet.
        </h4>
      )}
    </div>
  )
}

export default MyReviews
