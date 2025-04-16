import React, { Fragment, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import NavLogo from '../assets/nav-logo.svg'
import '../styles/Navbar.css';

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const [isMobileMenu, setMobileMenu] = useState(false);
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 850) {
      setMobileMenu(true);
      setMobileMenuVisible(false);
    } else {
      setMobileMenu(false);
      setMobileMenuVisible(false);
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 40) setSticky(true);
    else setSticky(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!isMobileMenuVisible);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
        {/* Disable clicks on the logo when faded */}
        <Link to='/' className='navbar_title' style={{ pointerEvents: isSticky ? "none" : "auto" }}>
          <motion.img 
            className='nav_logo' 
            src={NavLogo} 
            alt='ExploraVist'
            initial={{ opacity: 1 }}
            animate={{ opacity: isSticky ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          />
        </Link>
        <div className='nav_links'>
          {!isMobileMenu && 
            <motion.div
              style={{ pointerEvents: isSticky ? "none" : "auto" }}
              initial={{ opacity: 1 }}
              animate={{ opacity: isSticky ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <Link to='/updates' className='nav_link'>UPDATES</Link>
              <Link to='/about' className='nav_link'>ABOUT</Link>
            </motion.div>
          }
          {isMobileMenu &&
            <div>
              <button className='nav_link' onClick={toggleMobileMenu}>{!isMobileMenuVisible ? <Menu/> : <X /> }</button>
              {isMobileMenuVisible &&
              <motion.div
                className='nav_mobile_menu_dropdown'
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              >
                <div className='nav_mobile_menu'>
                  <div className='nav_mobile_menu_spacer' onClick={toggleMobileMenu} />
                  <div className='nav_mobile_menu_links'>
                    <p className='nav_mobile_menu_title'>Menu</p>
                    <Link to='/' className={`nav_mobile_menu_link ${window.location.pathname === '/' ? 'nav_mobile_menu_active_link' : ''}`}>Home</Link>
                    <Link to='/about' className={`nav_mobile_menu_link ${window.location.pathname === '/about' ? 'nav_mobile_menu_active_link' : ''}`}>About</Link>
                    <Link to='/updates' className={`nav_mobile_menu_link ${window.location.pathname === '/updates' ? 'nav_mobile_menu_active_link' : ''}`}>Updates</Link>
                    <div className='nav_mobile_menu_svg' />
                  </div>
                </div>
              </motion.div>
              }
            </div>
          }
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;