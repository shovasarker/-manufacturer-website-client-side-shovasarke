import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import CancelContext from '../../../../contexts/CancelContext'
import axiosPrivate from '../../../../utilities/Axios.init'
import SectionTitle from '../../../standalone/SectionTitle'
import Spinner from '../../../standalone/Spinner'
import MakeAdminModal from '../MakeAdminModal'
import UsersRow from '../UsersRow'

const MakeAdmin = () => {
  const { selectedUser } = useContext(CancelContext)
  const getUsers = async () => {
    const { data } = await axiosPrivate.get('user')
    return data
  }

  const { data: users, isLoading, refetch } = useQuery('users', getUsers)

  if (isLoading) return <Spinner center colored />

  return (
    <div className='my-10'>
      <SectionTitle subTitle={'All Users'} className='text-neutral' />
      <div className='overflow-x-auto w-full my-10 text-neutral'>
        <table className='table table-compact w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Job</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <UsersRow key={user?._id} user={user} index={index + 1} />
            ))}
          </tbody>
        </table>
        {!users?.length && (
          <p className='text-center text-neutral my-10'>
            No User Registered Till Now
          </p>
        )}
      </div>
      {selectedUser?.email && <MakeAdminModal refetch={refetch} />}
    </div>
  )
}

export default MakeAdmin
