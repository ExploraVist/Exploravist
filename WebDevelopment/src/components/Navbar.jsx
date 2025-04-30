import React, { Fragment, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Menu, X, Mailbox } from 'lucide-react';
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
    if (window.scrollY > 0) setSticky(true);
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
      <div className="navbar_container">
        <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
          <Link to='/' className='navbar_title'>
            <img 
              className='nav_logo' 
              src={NavLogo}
              alt='ExploraVist'
            />
          </Link>
          <div className='nav_links_center'>
            {!isMobileMenu && 
              <div>
                <Link to='/updates' className='nav_link'>UPDATES</Link>
                <Link to='/about' className='nav_link'>ABOUT</Link>
              </div>
            }
          </div>
          <div className='nav_links_right'>
            {!isMobileMenu && 
              <div>
                <Link to='/contact' className='nav_link_icon' title="Get Involved">
                  <Mailbox size={30} />
                </Link>
              </div>
            }
            {isMobileMenu &&
              <div>
                <button className='nav_link mobile_menu_button' onClick={toggleMobileMenu}>
                  <Menu size={26}/>
                </button>
                {isMobileMenuVisible &&
                <motion.div
                  className='nav_mobile_menu_dropdown'
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                >
                  <div className='nav_mobile_menu'>
                    <div className='nav_mobile_menu_header'>
                      <button className='nav_mobile_menu_close' onClick={toggleMobileMenu}>
                        <X size={40} />
                      </button>
                    </div>
                    <div className='nav_mobile_menu_links'>
                      <p className='nav_mobile_menu_title'>Menu</p>
                      <Link to='/' className={`nav_mobile_menu_link ${window.location.pathname === '/' ? 'nav_mobile_menu_active_link' : ''}`}>Home</Link>
                      <Link to='/about' className={`nav_mobile_menu_link ${window.location.pathname === '/about' ? 'nav_mobile_menu_active_link' : ''}`}>About</Link>
                      <Link to='/updates' className={`nav_mobile_menu_link ${window.location.pathname === '/updates' ? 'nav_mobile_menu_active_link' : ''}`}>Updates</Link>
                      <Link to='/contact' className={`nav_mobile_menu_link ${window.location.pathname === '/contact' ? 'nav_mobile_menu_active_link' : ''}`}>Get Involved</Link>
                      <div className='nav_mobile_menu_svg' />
                    </div>
                  </div>
                </motion.div>
                }
              </div>
            }
          </div>
        </nav>
      </div>
    </Fragment>
  );
};

export default Navbar;