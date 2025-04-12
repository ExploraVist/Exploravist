import React, { Fragment, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/Home.css';

const Home = () => {
  // Home Hero Section Hexagons
  useEffect(() => {
    const light = document.querySelector('.light');
    const grid = document.querySelector('.home_hero_wrapper');

    const handleMouseMove = (e) => {
      if (light) {
        setTimeout(() => {
          light.style.left = `${e.clientX}px`;
          light.style.top = `${e.clientY}px`;
        }, 200); // 200ms delay
      }
    };

    if (grid) {
      grid.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (grid) {
        grid.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <Fragment>
      <Navbar/>
      <section className='home_hero'>
        <div className='home_hero_wrapper'>
          <div className='hex_grid'>
            <div className='light'></div>
            <div className='grid'></div>
          </div>
          <div className='glass_background'>
            <h1 className='home_text_title'>See Your World, Differently.</h1>
            <p className='home_text_desc'>A wearable device and mobile app empowering blind and visually impaired users through affordable, AI-powered image understanding.</p>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  )
}

export default Home