import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { LogIn } from 'lucide-react'
import '../styles/Community.css'

const Community = () => {
  return (
    <Fragment>
        <Navbar/>
        <main className='community'>
            <section className='community_hero'>
            <button className='community_button'>
                Enter Portal <LogIn className="community_icon" />
            </button>
            </section>
        </main>
        <Footer/>
    </Fragment>
  )
}

export default Community