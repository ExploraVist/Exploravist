import React from 'react';
import FounderCard from './FounderCard';
import mauImage from '../../imgs/mau.jpg';
import ketImage from '../../imgs/ket.jpg';
import domImage from '../../imgs/dom.jpg';
import bilalImage from '../../imgs/bilal.jpg';
import ketIntro from '../../assets/ket.mp3';
import domIntro from '../../assets/dom.mp3';
import bilalIntro from '../../assets/bilal.mp3';
import '../../styles/about/OurTeam.css';

const OurTeam = () => {
  const founders = [
    {
      name: "Ket Hollingsworth",
      role: "CEO",
      linkedIn: "https://www.linkedin.com/in/ket-hollingsworth/",
      audioClip: ketIntro,
      image: ketImage
    },
    {
      name: "Dominick Quaye",
      role: "Co-CTO",
      linkedIn: "https://www.linkedin.com/in/dominick-q-907baa210/",
      audioClip: domIntro,
      image: domImage
    },
    {
      name: "Mauricio Bravo",
      role: "CCO",
      linkedIn: "https://www.linkedin.com/in/mauriciobravoguzman/",
      audioClip: '#',
      image: mauImage
    },
    {
      name: "Bilal Abraham",
      role: "Co-CTO",
      linkedIn: "https://www.linkedin.com/in/bilal-abraham/",
      audioClip: bilalIntro,
      image: bilalImage
    }
  ];

  return (
    <section className="our_team" role="region" aria-label="Our Team">
      <div className="our_team_wrapper">
        <div className="our_team_header">
          <span className="our_team_label">Our Team</span>
          <h2 className="our_team_title">Meet the Founders</h2>
          <p className="our_team_description">
            Get to know the passionate individuals behind ExploraVist who are dedicated to making technology more accessible and affordable for the visually impaired community.
          </p>
        </div>

        <div className="founders_grid" role="list" aria-label="Founder Profiles">
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

        <div className="additional_team_sections">
          {/* Team Members Section */}
          <section className="team_members">
            <h3 className="section_title">Team Members</h3>
            <ul className="team_list">
              <li>Nithya Yeluri - Embedded</li>
              <li>Max Conine - Embedded</li>
              <li>Nico Villalba - App Development</li>
              <li>Ruixi Xiang - Marketing Intern</li>
              <li>Alex Chacon - Marketing Intern</li>
            </ul>
          </section>

          {/* Research & Development Clinic Team Section */}
          <section className="rd_team">
            <h3 className="section_title">Research &amp; Development Clinic Team</h3>
            <p className="section_description">
              Clinic - Our Partnership with The Hive / HMC Clinic provided us with invaluable findings through a year long program of R&amp;D. Every decision throughout this program was made with a human-centered approach, with regular interview sessions at the lighthouse for the blind.
            </p>
            <ul className="team_list">
              <li>Katie Baakkonen</li>
              <li>Taylor Levinson</li>
              <li>Daniel Fajardo</li>
              <li>Massin Ihs</li>
              <li>Ket Hollingsworth</li>
              <li>Dominick Quaye</li>
              <li>Mauricio Bravo</li>
            </ul>
          </section>

          {/* Mentors/Advisory Board Section */}
          <section className="mentors_advisory">
            <h3 className="section_title">Mentors/Advisory Board</h3>
            <div className="advisor_subsections">
              <div className="technical_advisors">
                <h4 className="subsection_title">Technical</h4>
                <ul className="team_list">
                  <li>Aashita Kesarwani</li>
                  <li>Tristan Huang</li>
                </ul>
              </div>
              <div className="vision_advisors">
                <h4 className="subsection_title">Vision &amp; Community</h4>
                <ul className="team_list">
                  <li>Lighthouse for the Blind</li>
                  <li>The Hive</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;