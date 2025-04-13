import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HomeHero from '../components/HomeHero'
import Product from '../components/Product'
import '../styles/Home.css'

const Home = () => {
  return (
    <Fragment>
      <Navbar/>
      <main id="main-content" tabIndex="-1">
        <HomeHero />
        <Product />
      </main>
      <Footer />
    </Fragment>
  )
}

export default Home