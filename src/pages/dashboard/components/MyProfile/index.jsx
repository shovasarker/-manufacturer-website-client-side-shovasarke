import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import auth from '../../../../firebase/firebase.init'
import axiosPrivate from '../../../../utilities/Axios.init'
import Spinner from '../../../standalone/Spinner'
import blankProfile from '../../../../assets/images/blank-profile.svg'
import Button from '../../../standalone/Button'
import UpdateProfile from '../UpdateProfile'

const MyProfile = () => {
  const [user] = useAuthState(auth)
  const [edit, setEdit] = useState(false)
  const getMyProfile = async () => {
    const { data } = await axiosPrivate.get(`user/${user?.email}`)
    return data
  }

  const {
    data: profile,
    isLoading,
    refetch,
  } = useQuery(['profile', user?.email], getMyProfile)

  if (isLoading) return <Spinner center colored />

  const { displayName, img, email, education, address, phone, linkedIn } =
    profile

  return (
    <div className='my-10 lg:ml-6 space-y-4'>
      <div className='avatar'>
        <div className='w-32 rounded-full'>
          <img src={img ? img : blankProfile} alt={displayName} />
        </div>
      </div>
      <h2 className='text-2xl font-mono'>
        Name: <span className='font-semibold'>{displayName}</span>
      </h2>
      <p className='text-lg'>
        Email:{' '}
        <span className='font-semibold'>{email ? email : 'No Data Found'}</span>
      </p>
      <p className='text-lg'>
        Education:{' '}
        <span className='font-semibold'>
          {education ? education : 'No Data Found'}
        </span>
      </p>
      <p className='text-lg'>
        Phone Number:{' '}
        <span className='font-semibold'>{phone ? phone : 'No Data Found'}</span>
      </p>
      <p className='text-lg'>
        Address:{' '}
        <span className='font-semibold'>
          {address ? address : 'No Data Found'}
        </span>
      </p>
      <p className='text-lg'>
        LinkedIn Profile:{' '}
        <span className='font-semibold'>
          {linkedIn ? linkedIn : 'No Data Found'}
        </span>
      </p>
      <Button neutral className={'!px-8'} onClick={() => setEdit(!edit)}>
        {edit ? <>Cancel</> : <>Edit</>}
      </Button>

      {edit && <UpdateProfile refetch={refetch} setEdit={setEdit} />}
    </div>
  )
}

export default MyProfile
