import React from 'react';
import { Camera, Edit, Share, Mountain, FileText, Mic, Apple, PenTool, Users, Speaker, Search, Sparkles, Bluetooth } from 'lucide-react';
import '../styles/Product.css';
import FeatureCard from './FeatureCard';
import deviceImage from '../imgs/device-image.png';
import captureUI from '../imgs/capture.png';
import galleryUI from '../imgs/gallery.png';
import settingsUI from '../imgs/settings.png';

const Product = () => {
  const features = [
    { icon: Mountain, title: 'Describe landscapes', description: 'Describe landscapes, colors of clothing, and more' },
    { icon: FileText, title: 'Text Recognition', description: 'Read any text in handwriting + different fonts' },
    { icon: Mic, title: 'Voice Control', description: 'Detailed Image Descriptions' },
    { icon: Apple, title: 'Nutrition Scanner', description: 'Scan Nutrition Labels' },
    { icon: Edit, title: 'Customization', description: 'Change descriptions to add your own information' },
    { icon: Users, title: 'Share', description: 'Share images with your family and friends' },
    { icon: Speaker, title: 'Voice Selection', description: 'Choose from a selection of voices' },
    { icon: Search, title: 'Smart Search', description: 'Semantic Image Search' },
    { icon: Sparkles, title: 'Future Updates', description: 'We are committed to adding the features YOU want' }
  ];

  return (
    <section className="product-section" aria-label="Product Features">
      {/* Device Section */}
      <div className="device-section" role="region" aria-label="Device Overview">
        <div className="device-content">
          <div className="device-text">
            <blockquote>
              <p>"Linear changes in ease of use lead to exponential changes in usability."</p>
              <footer>
                <cite>– Dominick Quaye, CTO</cite>
              </footer>
            </blockquote>
            <div className="device-features">
              <h2>Attach to any pair of glasses</h2>
              <p>We're simple: Just a camera, a speaker, and a microphone.</p>
              <div className="feature-grid" role="list">
                <div className="feature-item" role="listitem">
                  <Camera size={24} aria-hidden="true" />
                  <span>Capture moments</span>
                </div>
                <div className="feature-item" role="listitem">
                  <PenTool size={24} aria-hidden="true" />
                  <span>Take notes</span>
                </div>
                <div className="feature-item" role="listitem">
                  <Share size={24} aria-hidden="true" />
                  <span>Share with friends</span>
                </div>
              </div>
            </div>
          </div>
          <div className="device-image">
            <img src={deviceImage} alt="ExploraVist Device attached to glasses" className="device-img" />
          </div>
        </div>
      </div>

      {/* App Section */}
      <div className="app-section" role="region" aria-label="App Features">
        <div className="app-header">
          <Bluetooth className="bluetooth-icon" size={48} aria-hidden="true" />
          <h2>Pair your ExploraVist device with the App with a click</h2>
          <p>We believe in simple, minimalist design, built with ease of use in mind.</p>
          
          <div className="app-showcase" aria-label="App Interface Previews">
            <div className="app-screenshot">
              <img src={captureUI} alt="Capture Interface showing camera view" />
            </div>
            <div className="app-screenshot">
              <img src={galleryUI} alt="Gallery Interface displaying captured images" />
            </div>
            <div className="app-screenshot">
              <img src={settingsUI} alt="Settings Interface for app customization" />
            </div>
          </div>
        </div>

        <div className="app-features" role="list" aria-label="App Features List">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product; 