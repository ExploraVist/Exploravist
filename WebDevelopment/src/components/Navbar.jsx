import React, { Fragment, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import NavLogo from '../imgs/nav-logo.png';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const [isMobileMenu, setMobileMenu] = useState(false);
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 700) {
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
              <Link to='/contact' className='nav_link'><b>CONTACT</b></Link>
              <Link to='/updates' className='nav_link'><b>UPDATES</b></Link>
            </motion.div>
          }
          {isMobileMenu &&
            <div>
              <button className='nav_link' onClick={toggleMobileMenu}><Menu/></button>
              {isMobileMenuVisible &&
              <motion.div
                className='nav_mobile_menu_dropdown'
                initial={{ y: '-100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-100%' }}
                transition={{ duration: 0.5 }}
              >
                <div className='nav_mobile_menu'>
                  <div className='nav_mobile_menu_x'>
                    <button className='nav_mobile_menu_x_btn' onClick={toggleMobileMenu}><X className='square' size={55}/></button>
                  </div>
                  <div className='nav_mobile_menu_links'>
                    <p className='nav_mobile_menu_title'>Navigate</p>
                    <Link to='/' className='nav_mobile_menu_link'>Home</Link>
                    <Link to='/updates' className='nav_mobile_menu_link'>Updates</Link>
                    <Link to='/contact' className='nav_mobile_menu_link'>Contact</Link>
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