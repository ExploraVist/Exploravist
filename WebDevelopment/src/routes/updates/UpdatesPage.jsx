// src/routes/updates/Gen01Update.jsx
import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { updates } from '../../data/updatesData';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../styles/updates/UpdatePage.css';

const UpdatesPage = () => {
  const { slug } = useParams();

  const update = updates.find(u => u.slug === slug);

  // If no matching update is found, show a message
  if (!update) {
    return (
      <Fragment>
        <Navbar />
        <div className="update-page">
          <p>Update not found. Please check the URL and ensure it matches your update data.</p>
        </div>
        <Footer />
      </Fragment>
    );
  }

  // Helper function to render each section based on type
  const renderSection = (section, index) => {
    switch (section.type) {
      case 'paragraph':
        return <p key={index}>{section.content}</p>;
      case 'header': {
        const Tag = `h${section.headerLevel || 3}`;
        return <Tag key={index}>{section.content}</Tag>;
      }
      case 'imageLink':
        return (
          <div key={index} className="update-image-link">
            <a href={section.link} target="_blank" rel="noopener noreferrer">
              <img src={`/imgs/${section.imageKey}.jpg`} alt={section.content || 'Update Image'} />
            </a>
          </div>
        );
      case 'paragraphWithLink':
        return (
          <p key={index}>
            {section.content}{' '}
            <a href={section.linkUrl} target="_blank" rel="noopener noreferrer">
              {section.linkText}
            </a>
          </p>
        );
      case 'list':
        return (
          <ul key={index}>
            {section.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar />
      <div className="update-page">
        <div className="update-header">
          <h1>{update.title}</h1>
          <p className="update-date">Posted on {update.date}</p>
        </div>
        <div className="update-content">
          {update.sections.map((section, idx) => renderSection(section, idx))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UpdatesPage;