import React from 'react';
import '../../styles/home/FeatureCard.css';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div 
      className="feature-card" 
      role="listitem" 
      aria-label={`${title}: ${description}`}
    >
      <Icon size={32} aria-hidden="true" className="feature-icon" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard; 