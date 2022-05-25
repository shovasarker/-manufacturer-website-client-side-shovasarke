import React from 'react'
import Footer from '../../shared/footer/Footer'
import SearchBar from '../../shared/SearchBar'
import Banner from '../components/Banner'
import HomeParts from '../components/HomeParts'

const Home = () => {
  return (
    <>
      <main>
        <Banner />
        <SearchBar />
        <HomeParts />
      </main>
      <Footer />
    </>
  )
}

export default Home
