import React from 'react';
import FounderCard from './FounderCard';
import founderImage from '../../imgs/founder.png';
import ketImage from '../../imgs/ket.jpg'
import domImage from '../../imgs/dom.jpg'
import bilalImage from '../../imgs/bilal.jpg'
import '../../styles/about/OurTeam.css';

const OurTeam = () => {
  const founders = [
    {
      name: "Ket Hollingsworth",
      role: "CEO",
      linkedIn: "https://www.linkedin.com/in/ket-hollingsworth/",
      audioClip: "#",
      image: ketImage
    },
    {
      name: "Dominick Quaye",
      role: "CTO",
      linkedIn: "https://www.linkedin.com/in/dominick-q-907baa210/",
      audioClip: "#",
      image: domImage
    },
    {
      name: "Mauricio Bravo",
      role: "CCO",
      linkedIn: "https://www.linkedin.com/in/mauriciobravoguzman/",
      audioClip: "#",
      image: founderImage
    },
    {
      name: "Bilal Abraham",
      role: "CTO",
      linkedIn: "https://www.linkedin.com/in/bilal-abraham/",
      audioClip: "#",
      image: bilalImage
    }
  ];

  return (
    <section className="our_team" role="region" aria-label="Our Team">
      <div className="our_team_wrapper">
        <div className="our_team_header">
          <span className="our_team_label">Our Team</span>
          <h2 className="our_team_title" tabIndex="0">Meet the Founders</h2>
          <p className="our_team_description" tabIndex="0">
            Get to know the passionate individuals behind ExploraVist who are dedicated to making technology more accessible and affordable for the visually impaired community.
          </p>
        </div>

        <div className="founders_grid">
          {founders.map((founder, index) => (
            <FounderCard
              key={index}
              name={founder.name}
              role={founder.role}
              linkedIn={founder.linkedIn}
              audioClip={founder.audioClip}
              image={founder.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam; 