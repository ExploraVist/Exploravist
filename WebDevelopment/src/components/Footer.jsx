import React, { useState } from 'react';
import { Instagram, Twitter, Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('dquaye@hmc.edu')
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
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
          <h2 className="footer-heading">ExploraVist</h2>
          <p className="footer-mission">
            Empowering the blind and visually impaired with affordable, AI-powered assistive tech.
          </p>
          <div className="footer-spark" role="presentation" aria-hidden="true">
            <div className="spark-dot"></div>
          </div>
        </div>

        {/* Middle Column - Quick Links */}
        <div className="footer-column" role="region" aria-label="Quick Links">
          <h3 className="footer-subheading">Quick Links</h3>
          <nav className="footer-nav" role="navigation" aria-label="Footer Navigation">
            <ul className="footer-links">
              <li><Link to="/" className="footer-link" tabIndex="0">Home</Link></li>
              <li><Link to="/about" className="footer-link" tabIndex="0">About</Link></li>
              <li><Link to="/updates" className="footer-link" tabIndex="0">Updates</Link></li>
              <li><Link to="/get-involved" className="footer-link" tabIndex="0">Get Involved</Link></li>
            </ul>
          </nav>
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
              tabIndex="0"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://twitter.com/exploravist" 
              className="social-link" 
              target="_blank" 
              rel="noopener noreferrer"
              tabIndex="0"
              aria-label="Follow us on Twitter"
            >
              <Twitter size={24} />
            </a>
            <a 
              href="https://github.com/exploravist" 
              className="social-link" 
              target="_blank" 
              rel="noopener noreferrer"
              tabIndex="0"
              aria-label="Visit our GitHub"
            >
              <Github size={24} />
            </a>
          </div>
          <div className="footer-email">
            <Mail size={16} />
            <p
              className="email-link"
              tabIndex="0"
              onClick={() => handleCopyEmail}
            >
              exploravist@exploravist.com
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="footer-bottom" role="contentinfo">
        <p>© 2023 ExploraVist. Built by people who care.</p>
      </div>
    </footer>
  );
};

export default Footer;