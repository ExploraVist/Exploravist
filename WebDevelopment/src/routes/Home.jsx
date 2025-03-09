import React, { Fragment, useEffect, useRef } from 'react'
import { ArrowDownToLine } from 'lucide-react'
import { motion, useAnimation } from 'framer-motion'
import Navbar from '../components/Navbar'
import ImageSlider from '../components/ImageSlider'
import VideoPlayer from '../components/VideoPlayer'
import Footer from '../components/Footer'
import img1 from '../imgs/image-1.jpg'
import img2 from '../imgs/image-2.jpg'
import img3 from '../imgs/image-3.jpg'
import img4 from '../imgs/image-4.jpg'
import img5 from '../imgs/image-5.jpg'
import '../styles/Home.css';

const Home = () => {
  const images = [img1, img2, img3, img4, img5];

  // Next Section
  const sliderRef = useRef(null); 
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        const rect = sliderRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 1 }
          });
        } else {
          controls.start({
            opacity: .5,
            y: -100,
            transition: { duration: 1 }
          });
        }
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls])

  const scrollToVideo = () => {
    const videoSection = document.getElementById('videoSection');
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Home Hero Section Hexagons
  useEffect(() => {
    const light = document.querySelector('.light');
    const grid = document.querySelector('.hex_grid');

    const handleMouseMove = (e) => {
      if (light) {
        light.style.left = `${e.clientX}px`;
        light.style.top = `${e.clientY}px`;
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
      <section className='home_logo_hero'>
        <div className='home_logo'>
          <header className='hex_grid'>
            <div className='light'></div>
            <div className='grid'></div>
          </header>
          <div className='glass_background'>
            <p className='home_text_title'> An affordable, AI-driven device designed for the visually impaired.</p>
            <p className='home_text_desc'> Easily attachable to any pair of glasses, ExploraVist reliably provides detailed descriptions of the user’s surroundings in just seconds.</p>
          </div>
        </div>
      </section>
      <section className='home_nextsection'>
        <motion.button 
          className='home_nextsection_btn' 
          onClick={scrollToVideo}
          whileHover={{scale: 1.1}}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <ArrowDownToLine className='home_arrow_down' size={30} />
        </motion.button>
      </section>
      <motion.section
        id='videoSection'
        className='home_image_video'
        initial={{ opacity: .5, y: -100 }}
        animate={controls} 
        ref={sliderRef} 
      >
        <VideoPlayer/>
      </motion.section>
      <section className='home_image_slider'>
        <div className='image_slider_wrapper' aria-label='Image Slider'>
          <ImageSlider imageUrls={images} />
        </div>
      </section>
      <section className='home_text_section'>
        
      </section>
      <Footer />
    </Fragment>
  )
}

export default Home