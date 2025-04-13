import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HomeHero from '../components/HomeHero'
import Product from '../components/Product'
import Partnerships from '../components/Partnerships'
import HomeRoutes from '../components/HomeRoutes'

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <main id="main-content" tabIndex="-1">
        <HomeHero />
        <Product />
        <Partnerships />
        <HomeRoutes />
      </main>
      <Footer />
    </Fragment>
  )
}

export default Home