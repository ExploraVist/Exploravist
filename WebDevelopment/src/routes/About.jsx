import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutHero from '../components/about/AboutHero'
import OurTeam from '../components/about/OurTeam'

const About = () => {
  return (
    <Fragment>
        <Navbar />
        <main id="main-content" tabIndex="-1">
            <AboutHero />
            <OurTeam />
        </main>
        <Footer />
    </Fragment>
  )
}

export default About