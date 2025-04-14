import React from 'react';
import FounderCard from './FounderCard';
import founderImage from '../../imgs/founder.png';
import ketImage from '../../imgs/ket.jpg';
import domImage from '../../imgs/dom.jpg';
import bilalImage from '../../imgs/bilal.jpg';
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
          <span className="our_team_label" tabIndex="0">Our Team</span>
          <h2 className="our_team_title" tabIndex="0">Meet the Founders</h2>
          <p className="our_team_description" tabIndex="0">
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
            <h3 className="section_title" tabIndex="0">Team Members</h3>
            <ul className="team_list">
              <li tabIndex="0">Nithya Yeluri - Embedded</li>
              <li tabIndex="0">Nico Villalba - App Development</li>
              <li tabIndex="0">Max Conine - Embedded Intern</li>
              <li tabIndex="0">Ruixi Xiang - Marketing Intern</li>
              <li tabIndex="0">Alex Chacon - Marketing Intern</li>
              <li tabIndex="0">William Koh - Local LLM Development Intern</li>
            </ul>
          </section>

          {/* Research &amp; Development Clinic Team Section */}
          <section className="rd_team">
            <h3 className="section_title" tabIndex="0">Research &amp; Development Clinic Team</h3>
            <p className="section_description" tabIndex="0">
              Clinic - Our Partnership with The Hive / HMC Clinic provided us with invaluable findings through a year long program of R&amp;D. Every decision throughout this program was made with a human-centered approach, with regular interview sessions at the lighthouse for the blind.
            </p>
            <ul className="team_list">
              <li tabIndex="0">Katie Baakkonen</li>
              <li tabIndex="0">Taylor Levinson</li>
              <li tabIndex="0">Daniel Fajardo</li>
              <li tabIndex="0">Massin Ihs</li>
              <li tabIndex="0">Ket Hollingsworth</li>
              <li tabIndex="0"> Dominick Quaye</li>
              <li tabIndex="0">Mauricio Bravo</li>
            </ul>
          </section>

          {/* Mentors/Advisory Board Section */}
          <section className="mentors_advisory">
            <h3 className="section_title" tabIndex="0"> Mentors/Advisory Board</h3>
            <div className="advisor_subsections">
              <div className="technical_advisors">
                <h4 className="subsection_title" tabIndex="0">Technical</h4>
                <ul className="team_list">
                  <li tabIndex="0">Aashita Kesinwari</li>
                  <li tabIndex="0">Tristan Huang</li>
                </ul>
              </div>
              <div className="vision_advisors">
                <h4 className="subsection_title" tabIndex="0">Vision &amp; Community</h4>
                <ul className="team_list">
                  <li tabIndex="0">James Warnken</li>
                  <li tabIndex="0">Arturo (LastName)</li>
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