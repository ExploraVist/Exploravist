import React, { Fragment, useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { Menu, X, Mailbox } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import NavLogo from '../assets/nav-logo.svg'
import '../styles/Navbar.css';

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const [isMobileMenu, setMobileMenu] = useState(false);
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const menuRef = useRef(null);
  const firstMenuItemRef = useRef(null);

  const handleResize = () => {
    if (window.innerWidth <= 850) {
      setMobileMenu(true);
    } else {
      setMobileMenu(false);
      setMobileMenuVisible(false); // Close menu when resizing to desktop
    }
    // Always show navbar on mobile
    setIsVisible(true);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const threshold = 100;
    
    // Only apply disappearing behavior on desktop
    if (!isMobileMenu) {
      if (currentScrollY > lastScrollY && currentScrollY > threshold) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    }
    
    setLastScrollY(currentScrollY);
    setSticky(currentScrollY > 0);
  };

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!isMobileMenuVisible);
    // Toggle body scroll lock
    document.body.style.overflow = !isMobileMenuVisible ? 'hidden' : '';
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      toggleMobileMenu();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      toggleMobileMenu();
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      // Ensure scroll is re-enabled when component unmounts
      document.body.style.overflow = '';
    };
  }, [lastScrollY, isMobileMenu]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (isMobileMenuVisible && firstMenuItemRef.current) {
      firstMenuItemRef.current.focus();
    }
  }, [isMobileMenuVisible]);

  const MobileMenu = () => {
    if (!isMobileMenuVisible) return null;

    return createPortal(
      <div 
        className="mobile-menu-backdrop"
        onClick={handleBackdropClick}
        role="presentation"
      >
        <motion.div
          className='nav_mobile_menu_dropdown'
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.3 }}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className='nav_mobile_menu'>
            <div className='nav_mobile_menu_header'>
              <button 
                className='nav_mobile_menu_close' 
                onClick={toggleMobileMenu}
                aria-label="Close menu"
              >
                <X size={40} />
              </button>
            </div>
            <nav className='nav_mobile_menu_links' role="navigation">
              <p className='nav_mobile_menu_title'>Menu</p>
              <Link 
                to='/' 
                className={`nav_mobile_menu_link ${window.location.pathname === '/' ? 'nav_mobile_menu_active_link' : ''}`}
                ref={firstMenuItemRef}
                tabIndex={0}
              >
                Home
              </Link>
              <Link 
                to='/about' 
                className={`nav_mobile_menu_link ${window.location.pathname === '/about' ? 'nav_mobile_menu_active_link' : ''}`}
                tabIndex={0}
              >
                About
              </Link>
              <Link 
                to='/updates' 
                className={`nav_mobile_menu_link ${window.location.pathname === '/updates' ? 'nav_mobile_menu_active_link' : ''}`}
                tabIndex={0}
              >
                Updates
              </Link>
              <Link 
                to='/contact' 
                className={`nav_mobile_menu_link ${window.location.pathname === '/contact' ? 'nav_mobile_menu_active_link' : ''}`}
                tabIndex={0}
              >
                Get Involved
              </Link>
              <div className='nav_mobile_menu_svg' />
            </nav>
          </div>
        </motion.div>
      </div>,
      document.body
    );
  };

  return (
    <Fragment>
      <div className={`navbar_container ${isVisible ? 'visible' : 'hidden'}`}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <nav className={`navbar ${isSticky ? 'sticky' : ''}`} role="navigation" aria-label="Main navigation">
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
                <button 
                  className='nav_link mobile_menu_button' 
                  onClick={toggleMobileMenu}
                  aria-expanded={isMobileMenuVisible}
                  aria-label="Open menu"
                >
                  <Menu size={26}/>
                </button>
                <AnimatePresence>
                  <MobileMenu />
                </AnimatePresence>
              </div>
            }
          </div>
        </nav>
      </div>
    </Fragment>
  );
};

export default Navbar;