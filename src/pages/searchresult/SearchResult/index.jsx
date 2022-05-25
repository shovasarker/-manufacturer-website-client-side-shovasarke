import React from 'react'
import { useParams } from 'react-router-dom'
import PartsContainer from '../../shared/partscontainer/PartsContainer'
import SearchBar from '../../shared/SearchBar'

const SearchResult = () => {
  const { searchText } = useParams()
  return (
    <main>
      <SearchBar />
      <PartsContainer
        url={`https://mwss-server.herokuapp.com/part/search?name=${searchText}`}
      />
    </main>
  )
}

export default SearchResult
