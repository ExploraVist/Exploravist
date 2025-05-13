import React, { useState } from 'react';
import { Instagram, Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  
    const handleCopyEmail = () => {
      navigator.clipboard.writeText('exploravist@exploravist.net')
        .then(() => {
          alert("Email address copied to clipboard!");
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
        });
    };

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        {/* Left Column - Mission */}
        <div className="footer-column" role="region" aria-label="Mission Statement">
          <h2 className="footer-heading"><Link to='/' className='footer-heading-link'>ExploraVist</Link></h2>
          <p className="footer-mission">
            Empowering the visually impaired with affordable, AI-powered assistive tech.
          </p>
          <div className="footer-spark" role="presentation" aria-hidden="true">
            <div className="spark-dot"></div>
          </div>
        </div>

        {/* Middle Column - Quick Links */}
        <div className="footer-column" role="region" aria-label="Quick Links">
          {/* <h3 className="footer-subheading">Quick Links</h3>
          <nav className="footer-nav" role="navigation" aria-label="Footer Navigation">
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About</Link></li>
              <li><Link to="/updates" className="footer-link">Updates</Link></li>
              <li><Link to="/contact" className="footer-link">Get Involved</Link></li>
            </ul>
          </nav> */}
        </div>

        {/* Right Column - Socials */}
        <div className="footer-column" role="region" aria-label="Contact Information">
          <h3 className="footer-subheading">Connect With Us</h3>
          <div className="social-links">
            <a 
              href="https://instagram.com/exploravist" 
              className="social-link" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={24} aria-hidden="true" />
            </a>
            <a 
              href="https://x.com/ExploraVist_Inc" 
              className="social-link" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit our X"
            >
              <Twitter size={24} aria-hidden="true" />
            </a>
            <a 
              href="https://www.linkedin.com/company/exploravist" 
              className="social-link" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Follow us on LinkedIn"
            >
              <Linkedin size={24} aria-hidden="true" />
            </a>
            <a 
              href="https://github.com/exploravist" 
              className="social-link" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit our GitHub"
            >
              <Github size={24} aria-hidden="true" />
            </a>
          </div>
          <div className="footer-email">
            <Mail size={16} aria-hidden="true" />
            <button
              className="email-link"
              onClick={handleCopyEmail}
              aria-label="Copy email address to clipboard"
            >
              exploravist@exploravist.net
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="footer-bottom" role="contentinfo">
        <p>© 2025 ExploraVist</p>
      </div>
    </footer>
  );
};

export default Footer;