import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';
import audioFile from '../../assets/audio.mp3';
import '../../styles/about/AboutHero.css';

const AboutHero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(audioFile));

  const toggleAudio = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Ensure audio state stays in sync
  audio.onended = () => setIsPlaying(false);

  return (
    <section className="about_hero" role="region" aria-label="About ExploraVist">
      <div className="about_hero_wrapper">
        <div className="about_hero_content">
          {/* Mission Statement Section */}
          <div className="about_hero_mission_statement" role="region" aria-label="Mission Statement">
            <span className="about_hero_label">Our Mission</span>
            <div className="about_hero_statements">
              <p className="about_statement" tabIndex="0">
                <span className="statement_highlight">Empowering</span> the blind and visually impaired
              </p>
              <p className="about_statement" tabIndex="0">
                through <span className="statement_highlight">intuitive, affordable</span> technology
              </p>
              <p className="about_statement" tabIndex="0">
                that sparks <span className="statement_highlight">curiosity</span> and fosters <span className="statement_highlight">connection</span>
              </p>
            </div>
          </div>
          
          {/* Inspiration Section */}
          <div className="about_hero_mission" role="region" aria-label="Our Journey">
            <span className="about_hero_label">The Journey</span>
            <h2 className="about_mission_title" tabIndex="0">
              What inspired our mission?
            </h2>
            <div className="about_mission_content">
              <div className="about_mission_section" role="article">
                <h3 className="about_mission_subtitle" tabIndex="0">The Market Gap</h3>
                <p className="about_mission_text" tabIndex="0">
                  When we looked into the market for wearable accessibility technology, we noticed a clear gap. Companies like Envision and OrCam offer wearables starting at $2,000, creating a significant barrier for many.
                </p>
              </div>
              
              <div className="about_mission_section" role="article">
                <h3 className="about_mission_subtitle" tabIndex="0">The Reality</h3>
                <p className="about_mission_text" tabIndex="0">
                  The visually impaired community often faces significant financial disadvantages. Community feedback consistently tells us that existing solutions are too expensive for what they offer.
                </p>
              </div>
              
              <div className="about_mission_section" role="article">
                <h3 className="about_mission_subtitle" tabIndex="0">Our Response</h3>
                <p className="about_mission_text" tabIndex="0">
                  This revealed a clear need for more affordable and accessible devices. So began our journey to create technology truly built for the majority of the VI community.
                </p>
              </div>
            </div>
          </div>

          {/* Origin Story Section */}
          <div className="about_hero_origin" role="region" aria-label="Our Origin Story">
            <h2 className="about_origin_title" tabIndex="0">
              How did ExploraVist start?
            </h2>
            <div className="audio_player" role="region" aria-label="Origin Story Audio Player">
              <button 
                className="audio_button" 
                onClick={toggleAudio}
                aria-label={isPlaying ? "Pause origin story" : "Play origin story"}
                tabIndex="0"
              >
                {isPlaying ? (
                  <Pause className="audio_icon" aria-hidden="true" />
                ) : (
                  <Play className="audio_icon" aria-hidden="true" />
                )}
                <span className="audio_text">
                  {isPlaying ? "Pause Story" : "Play Story"}
                </span>
              </button>
              <div className="audio_description" tabIndex="0">
                Listen to our founders share how ExploraVist came to be
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;