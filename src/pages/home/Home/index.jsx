import React from 'react'
import Footer from '../../shared/footer/Footer'
import SearchBar from '../../shared/SearchBar'
import Banner from '../components/Banner'
import BusinessSummary from '../components/BusinessSummary'
import HomeParts from '../components/HomeParts'
import Popular from '../components/Popular'
import Reviews from '../components/Reviews'

const Home = () => {
  return (
    <>
      <main>
        <Banner />
        <SearchBar />
        <HomeParts />
        <BusinessSummary />
        <Popular />
        <Reviews />
      </main>
      <Footer />
    </>
  )
}

export default Home
