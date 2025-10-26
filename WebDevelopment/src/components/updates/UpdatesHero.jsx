import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/updates/UpdatesHero.css';

const UpdatesHero = () => {
  // Example data array with label + date.
  // (They are ordered from newest at the top to oldest at the bottom.)
  const updatesData = [
    { id: 1, label: 'Gen 0.4', date: '06.21.25', route: '/updates/gen-0.4' },
    { id: 2, label: 'SageTank Win', date: '05.03.25', route: '/updates/sagetank-first-place' },
    { id: 3, label: 'Hive Partnership', date: '12.05.24', route: '/updates/hive-partnership' },
    { id: 4, label: 'HMC Clinic', date: '8.16.24', route: '/updates/hmc-clinic' },
    { id: 5, label: 'Gen 0.3', date: '04.21.24', route: '/updates/gen-0.3' },
    { id: 6, label: 'Gen 0.2', date: '02.15.24', route: '/updates/gen-0.2' },
    { id: 7, label: 'Gen 0.1', date: '12.25.23', route: '/updates/gen-0.1' },
  ];

  return (
    <section className="updates_hero" role="region" aria-label="Updates Workflow">
      <div className="updates_hero_wrapper">
        <div className="updates_hero_content">
          <h1 className="updates_hero_title">Updates</h1>
          <p className="updates_hero_subtitle">Click a node to navigate to the corresponding update. </p>  
          <div className="updates_timeline">
            {/* Vertical line through the center of the timeline */}
            <div className="timeline_line" aria-hidden="true" />

            {updatesData.map((update) => (
              <div className="timeline_item" key={update.id}>
                {/* Column 1: Text on the left, right–aligned */}
                <div className="timeline_text">
                  <h3 className="timeline_label">{update.label}</h3>
                  <p className="timeline_date">{update.date}</p>
                </div>

                {/* Column 2: Node in center */}
                <div className="node_container">
                  <Link to={update.route} className="node_link" aria-label={`${update.label} on ${update.date}. Click for a detailed report!`}>
                    <div className="node_outer_circle">
                      <div className="node_inner_circle" />
                    </div>
                  </Link>
                </div>

                {/* Column 3: Empty spacer for grid balance */}
                <div className="timeline_spacer" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdatesHero;
