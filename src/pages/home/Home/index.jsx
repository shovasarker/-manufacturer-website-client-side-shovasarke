import React from 'react'
import Footer from '../../shared/footer/Footer'
import SearchBar from '../../shared/SearchBar'
import Banner from '../components/Banner'
import BusinessSummary from '../components/BusinessSummary'
import HomeParts from '../components/HomeParts'

const Home = () => {
  return (
    <>
      <main>
        <Banner />
        <SearchBar />
        <HomeParts />
        <BusinessSummary />
      </main>
      <Footer />
    </>
  )
}

export default Home
