import React, { Fragment, useEffect, useRef } from 'react'
import { ArrowDownToLine } from 'lucide-react'
import { motion, useAnimation } from 'framer-motion'
import Navbar from '../components/Navbar'
import ImageSlider from '../components/ImageSlider'
import VideoPlayer from '../components/VideoPlayer'
import Footer from '../components/Footer'
import img1 from '../imgs/image-1a.png'
import img1b from '../imgs/image-1b.png'
import img2 from '../imgs/image-2.png'
import img2b from '../imgs/image-2b.png'
import img3 from '../imgs/image-3.png'
import img3b from '../imgs/image-3b.png'
import img4 from '../imgs/image-4.png'
import img4b from '../imgs/image-4b.png'
import img5 from '../imgs/image-5.png'
import img5b from '../imgs/image-5b.png'
import img6 from '../imgs/image-6.png'
import '../styles/Home.css';

const Home = () => {

  const images = [img2, img3, img4, img5, img6];

  // const screenWidth = window.innerWidth;
  // let images = [];
  // if (screenWidth < 950) {
  //   images = [img1b, img2b, img3b, img4b, img5b];
  // } else {
  //   images = [img1, img2, img3, img4, img5];
  // }
  

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
            y: -50,
            transition: { duration: 1 }
          });
        }
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls])

  const scrollToVideo = () => {
    const infoSection = document.getElementById('infoSection');
    if (infoSection) {
      infoSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

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
            <h1 className='home_text_title'>An affordable, AI-driven device designed for the visually impaired.</h1>
            <p className='home_text_desc'>Easily attachable to any pair of glasses, ExploraVist reliably provides detailed descriptions of the user’s surroundings in just seconds.</p>
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
        id='infoSection'
        className='home_testing'
        initial={{ opacity: .5, y: -50 }}
        animate={controls} 
        ref={sliderRef} 
      >
        <div className='home_testing_wrapper'>
          <div className='home_testing_background'>
            <div className='cyber_grid' />
          </div>
          <div className='home_testing_text'>
              <p className='home_testing_title glass_text'>Designed <i>with</i> You, <i>for</i> You</p>
              <p className='home_testing_text_one glass_text'>ExploraVist is more than a device - it’s a partnership.</p>
              <p className='home_testing_text_two glass_text'>We have collaborated directly with Blind and Visually Impaired communities, ensuring that every feature addresses real-world needs. Through continuous human-centered design and rigorous testing, we’re committed to empowering independence and accessibility, one innovation at a time.</p>
          </div>
        </div>
      </motion.section>
      <section className='home_rounded_box'>
        <VideoPlayer />
      </section>
      <section className='home_rounded_box'>
        <div className='image_slider_wrapper' aria-label='Image Slider'>
          <ImageSlider imageUrls={images} />
        </div>
      </section>
      <Footer />
    </Fragment>
  )
}

export default Home