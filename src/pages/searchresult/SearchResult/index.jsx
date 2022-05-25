import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'

import PartsContainer from '../../shared/partscontainer/PartsContainer'
import SearchBar from '../../shared/SearchBar'
import Button from '../../standalone/Button'

const SearchResult = () => {
  const { searchText } = useParams()
  const navigate = useNavigate()
  return (
    <main>
      <div className='container px-6'>
        <Button
          outlined
          neutral
          className={'my-5'}
          onClick={() => navigate(-1)}
        >
          <AiOutlineArrowLeft className='w-5 h-5 mr-2' />
          <>Go Back</>
        </Button>
      </div>
      <SearchBar />
      <h2 className='text-2xl text-center my-10 text-neutral'>
        Search Results for <span className='font-semibold'>"{searchText}"</span>
      </h2>
      <PartsContainer
        url={`https://mwss-server.herokuapp.com/part/search?name=${searchText}`}
      />
    </main>
  )
}

export default SearchResult
