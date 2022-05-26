import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import CancelContext from '../../../../contexts/CancelContext'
import axiosPrivate from '../../../../utilities/Axios.init'
import SectionTitle from '../../../standalone/SectionTitle'
import Spinner from '../../../standalone/Spinner'
import ConfirmationModal from '../ConfirmationModal'
import ManagePartsRow from '../ManagePartsRow'

const ManageParts = () => {
  const { canceled } = useContext(CancelContext)
  const getParts = async () => {
    const { data } = await axiosPrivate.get('part')
    return data
  }
  const { data: parts, isLoading, refetch } = useQuery('parts', getParts)

  if (isLoading) return <Spinner center colored />
  return (
    <div className='my-10'>
      <SectionTitle subTitle={'All Available Parts'} className='text-neutral' />
      <div className='overflow-x-auto w-full my-10 text-neutral'>
        <table className='table table-compact w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Parts Name</th>
              <th>Price</th>
              <th>Min order</th>
              <th>In Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {parts?.map((part, index) => (
              <ManagePartsRow key={part?._id} part={part} index={index + 1} />
            ))}
          </tbody>
        </table>
        {!parts?.length && (
          <p className='text-center text-neutral my-10'>No Parts Found.</p>
        )}
      </div>
      {canceled?._id && (
        <ConfirmationModal urlPart={'part'} refetch={refetch} />
      )}
    </div>
  )
}

export default ManageParts
