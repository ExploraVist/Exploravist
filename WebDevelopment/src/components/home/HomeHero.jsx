import React, { useEffect, useRef } from 'react'
import '../../styles/home/HomeHero.css'

const HomeHero = () => {
  const lightRef = useRef(null);
  const gridRef = useRef(null);
  const glassRef = useRef(null);

  useEffect(() => {
    const light = lightRef.current;
    const grid = gridRef.current;
    const glass = glassRef.current;
    let animationFrameId;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    // Organic light movement
    const animateLight = () => {
      // Smooth interpolation with faster response
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;

      if (light) {
        const rect = grid.getBoundingClientRect();
        // Calculate position relative to the grid container
        const x = currentX - rect.left;
        const y = currentY - rect.top;
        light.style.left = `${x}px`;
        light.style.top = `${y}px`;
      }

      animationFrameId = requestAnimationFrame(animateLight);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Subtle parallax effect on glass background
    const handleScroll = () => {
      if (glass) {
        const scrolled = window.scrollY;
        glass.style.transform = `translateY(${scrolled * 0.1}px)`;
      }
    };

    if (grid) {
      grid.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('scroll', handleScroll);
      animateLight();
    }

    return () => {
      if (grid) {
        grid.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('scroll', handleScroll);
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <section className='home_hero' role="region" aria-label="Hero Section">
      <div className='home_hero_wrapper' ref={gridRef}>
        <div className='hex_grid' aria-hidden="true">
          <div className='light' ref={lightRef}></div>
          <div className='grid'></div>
          <div className='grid_fade'></div>
        </div>
        <div className='glass_background' ref={glassRef}>
          <h1 className='home_text_title'>
            See Your World,<br />
            <span>Differently.</span>
          </h1>
          <p className='home_text_desc'>
            A wearable device and mobile app empowering visually impaired users through affordable, AI-powered image understanding.
          </p>
        </div>
      </div>
      <div className='scroll_indicator' role="presentation" aria-hidden="true">
        <div className='scroll_dot'></div>
      </div>
    </section>
  )
}

export default HomeHero 