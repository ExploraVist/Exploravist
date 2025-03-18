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
    const grid = document.querySelector('.home_hero_wrapper');

    const handleMouseMove = (e) => {
      if (light) {
      setTimeout(() => {
        light.style.left = `${e.clientX}px`;
        light.style.top = `${e.clientY + window.scrollY}px`; //fix this scroll thingth it doesnt work
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
      <section className='home_image_slider' id = 'imageSection'>
        <div className='image_slider_wrapper' aria-label='Image Slider'>
          <ImageSlider imageUrls={images} />
        </div>
      </section>
      <Footer />
    </Fragment>
  )
}

export default Home