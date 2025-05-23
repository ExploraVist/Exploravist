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
      role: "CHO",
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
      role: "CSO",
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
              <li className="team_member">
                <div className="member_name">Nithya Yeluri</div>
                <div className="member_role">Embedded</div>
              </li>
              <li className="team_member">
                <div className="member_name">Max Conine</div>
                <div className="member_role">Embedded</div>
              </li>
              <li className="team_member">
                <div className="member_name">Nico Villalba</div>
                <div className="member_role">App Development</div>
              </li>
              <li className="team_member">
                <div className="member_name">Ruixi Xiang</div>
                <div className="member_role">Marketing Intern</div>
              </li>
              {/* <li className="team_member">
                <div className="member_name">Alex Chacon</div>
                <div className="member_role">Marketing Intern</div>
              </li> */}
            </ul>
          </section>

          {/* Research & Development Clinic Team Section */}
          <section className="rd_team">
            <h3 className="section_title">Research &amp; Development Clinic</h3>
            <p className="section_description">
              Clinic - Our Partnership with The Hive / HMC Clinic provided us with invaluable findings through a year long program of R&amp;D. Every decision throughout this program was made with a human-centered approach, with regular interview sessions at the lighthouse for the blind.
            </p>
            <ul className="team_list">
              <li className="team_member">
                <div className="member_name">Katie Baakkonen</div>
                <div className="member_role">Engineer</div>
              </li>
              <li className="team_member">
                <div className="member_name">Taylor Levinson</div>
                <div className="member_role">Computer Science</div>
              </li>
              <li className="team_member">
                <div className="member_name">Daniel Fajardo</div>
                <div className="member_role">Engineer</div>
              </li>
              <li className="team_member">
                <div className="member_name">Massin Ihs</div>
                <div className="member_role">Engineer</div>
              </li>
              <li className="team_member">
                <div className="member_name">Ket Hollingsworth</div>
                <div className="member_role">Computer Science</div>
              </li>
              <li className="team_member">
                <div className="member_name">Dominick Quaye</div>
                <div className="member_role">Engineer</div>
              </li>
              <li className="team_member">
                <div className="member_name">Mauricio Bravo</div>
                <div className="member_role">Engineer</div>
              </li>
            </ul>
          </section>

          {/* Mentors/Advisory Board Section */}
          <section className="mentors_advisory">
            <h3 className="section_title">Mentors/Advisory Board</h3>
            <div className="advisor_subsections">
              <div className="technical_advisors">
                <h4 className="subsection_title">Technical</h4>
                <ul className="team_list">
                  <li className="team_member">
                    <div className="member_name">Aashita Kesarwani</div>
                    <div className="member_role">Data Science Specialist</div>
                  </li>
                  <li className="team_member">
                    <div className="member_name">Tristan Huang</div>
                    <div className="member_role">Hardware Advisor</div>
                  </li>
                </ul>
              </div>
              <div className="vision_advisors">
                <h4 className="subsection_title">Vision &amp; Community</h4>
                <ul className="team_list">
                  <li className="team_member">
                    <div className="member_name">Asha Srikantiah</div>
                    <div className="member_role">Human Centered Design Specialist</div>
                  </li>
                  <li className="team_member">
                    <div className="member_name">Deon Upshaw</div>
                    <div className="member_role">V.I. Marketing Specialist</div>
                  </li>
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