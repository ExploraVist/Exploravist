import React from 'react';
import '../styles/Partnerships.css';
import hiveLogo from '../imgs/hive-logo.png';
import muddLogo from '../imgs/mudd-logo.png';
import lighthouseLogo from '../imgs/lighthouse-logo.png';

const Partnerships = () => {
  return (
    <section className="partnerships" role="region" aria-label="Our Partners">
      <div className="partnerships-content">
        <h2 className="partnerships-heading">Our Partners</h2>
        <div className="partners-grid">
          <div className="partner-item" tabIndex="0">
            <div className="partner-logo-container">
              <img 
                src={hiveLogo} 
                alt="The Hive Logo" 
                className="partner-logo"
              />
            </div>
            <p className="partner-name">The Hive</p>
          </div>
          
          <div className="partner-item" tabIndex="0">
            <div className="partner-logo-container">
              <img 
                src={muddLogo} 
                alt="Harvey Mudd College Clinic Logo" 
                className="partner-logo"
              />
            </div>
            <p className="partner-name">HMC Clinic</p>
          </div>
          
          <div className="partner-item" tabIndex="0">
            <div className="partner-logo-container">
              <img 
                src={lighthouseLogo} 
                alt="Lighthouse for the Blind Logo" 
                className="partner-logo"
              />
            </div>
            <p className="partner-name">Lighthouse for the Blind</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships; 