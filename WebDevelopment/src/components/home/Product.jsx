import React from 'react';
import { Camera, Edit, Share, Mountain, FileText, Mic, Apple, Pencil, Users, Speech, Search, Sparkles, Bluetooth } from 'lucide-react';
import FeatureCard from './FeatureCard';
import deviceImage from '../../imgs/device-image.png';
import captureUI from '../../imgs/capture.png';
import editUI from '../../imgs/edit.png';
import galleryUI from '../../imgs/gallery.png';
import '../../styles/home/Product.css';

const Product = () => {
  const features = [
    { icon: Mountain, title: 'Describe landscapes', description: 'Describe landscapes, colors of clothing, and more' },
    { icon: FileText, title: 'Text Recognition', description: 'Read any text in handwriting + different fonts' },
    { icon: Mic, title: 'Voice Control', description: 'Detailed Image Descriptions' },
    { icon: Apple, title: 'Nutrition Scanner', description: 'Scan nutrition labels' },
    { icon: Edit, title: 'Customization', description: 'Change descriptions to add your own information' },
    { icon: Users, title: 'Share', description: 'Share images with your family and friends' },
    { icon: Speech, title: 'Voice Selection', description: 'Choose from a selection of voices' },
    { icon: Search, title: 'Smart Search', description: 'Voice prompted semantic image search' },
    { icon: Sparkles, title: 'Future Updates', description: 'We are committed to adding the features YOU want' }
  ];

  return (
    <section className="product-section" role="region" aria-label="Product Features">
      {/* Device Section */}
      <div className="device-section" role="region" aria-label="Device Overview">
        <div className="device-content">
          <div className="device-text">
            <blockquote tabIndex="0" aria-label="Quote from CTO">
              <p>"Linear increases in convenience lead to exponential increases in independence."</p>
              <footer>
                <cite>– Dominick Quaye, CTO</cite>
              </footer>
            </blockquote>
            <div className="device-features">
              <h2 tabIndex="0">Attach to any pair of glasses</h2>
              <p tabIndex="0">We're simple: Just a camera, a speaker, and a microphone.</p>
              <div className="feature-grid" role="list" aria-label="Core Device Features">
                <div className="feature-item" role="listitem" tabIndex="0">
                  <Camera size={24} aria-hidden="true" />
                  <span>Capture moments</span>
                </div>
                <div className="feature-item" role="listitem" tabIndex="0">
                  <Pencil size={24} aria-hidden="true" />
                  <span>Take notes</span>
                </div>
                <div className="feature-item" role="listitem" tabIndex="0">
                  <Share size={24} aria-hidden="true" />
                  <span>Share with friends</span>
                </div>
              </div>
            </div>
          </div>
          <div className="device-image" role="img" aria-label="ExploraVist Device Preview">   
            <img 
              src={deviceImage} 
              alt="ExploraVist Device attached to glasses showing the camera, speaker, and microphone components" 
              className="device-img" 
              tabIndex="0"
            />
          </div>
        </div>
      </div>

      {/* App Section */}
      <div className="app-section" role="region" aria-label="App Features">
        <div className="app-header">
          <Bluetooth className="bluetooth-icon" size={48} aria-hidden="true" />
          <h2 className="app-pair" tabIndex="0">Pair your ExploraVist device with the App</h2>
          <p tabIndex="0">We believe in simple, minimalist design, built with ease of use in mind.</p>
          
          <div className="app-showcase" role="region" aria-label="App Interface Previews">
            <div className="app-screenshot" tabIndex="0" role="img" aria-label="Capture Interface">
              <img 
                src={captureUI} 
                alt="Capture Interface showing camera view with capture button and settings options" 
              />
            </div>
            <div className="app-screenshot" tabIndex="0" role="img" aria-label="Settings Interface">
              <img 
                src={editUI} 
                alt="Capture Interface showing an image with a specific question and its response" 
              />
            </div>
            <div className="app-screenshot" tabIndex="0" role="img" aria-label="Gallery Interface">
              <img 
                src={galleryUI} 
                alt="Gallery Interface displaying captured images in a grid layout" 
              />
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