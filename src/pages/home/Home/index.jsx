import React from 'react'
import Footer from '../../shared/footer/Footer'
import Banner from '../components/Banner'
import HomeParts from '../components/HomeParts'

const Home = () => {
  return (
    <>
      <main>
        <Banner />
        <HomeParts />
      </main>
      <Footer />
    </>
  )
}

export default Home
