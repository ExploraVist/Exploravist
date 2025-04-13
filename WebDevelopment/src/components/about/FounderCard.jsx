import React, { useState } from 'react';
import { Play, Pause, Linkedin } from 'lucide-react';
import '../../styles/about/FounderCard.css';

const FounderCard = ({ name, role, linkedIn, audioClip, image }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(audioClip));

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
    <div className="founder_card" role="article" aria-label={`${name}, ${role}`}>
      <div className="founder_image_container">
        <img 
          src={image} 
          alt={`${name}, ${role} at ExploraVist`}
          className="founder_image"
        />
      </div>
      
      <div className="founder_content">
        <h3 className="founder_name" tabIndex="0">{name}</h3>
        <p className="founder_role" tabIndex="0">{role}</p>
        
        <div className="founder_actions">
          <button 
            className="founder_audio_button" 
            onClick={toggleAudio}
            aria-label={isPlaying ? `Pause ${name}'s introduction` : `Play ${name}'s introduction`}
            tabIndex="0"
          >
            {isPlaying ? (
              <Pause className="founder_icon" aria-hidden="true" />
            ) : (
              <Play className="founder_icon" aria-hidden="true" />
            )}
            <span className="founder_button_text">
              {isPlaying ? "Pause Intro" : "Play Intro"}
            </span>
          </button>

          <a 
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="founder_linkedin"
            aria-label={`Visit ${name}'s LinkedIn profile`}
            tabIndex="0"
          >
            <Linkedin className="founder_icon" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FounderCard; 