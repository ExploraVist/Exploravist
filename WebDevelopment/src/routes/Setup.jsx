import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SetupHero from '../components/setup/SetupHero'

const Setup = () => {
  return (
    <Fragment>
        <Navbar />
        <main id="main-content" tabIndex="-1">
            <SetupHero />
        </main>
        <Footer />
    </Fragment>
  )
}

export default Setup
