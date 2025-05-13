import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { updates } from '../data/updatesData';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CornerUpLeft } from 'lucide-react';
import '../styles/updates/UpdatesPage.css'

const UpdatesPage = () => {
  const { slug } = useParams();

  const update = updates.find(u => u.slug === slug);

  if (!update) {
    return (
      <Fragment>
        <Navbar />
        <main id="main-content" tabIndex="-1">
          <div className="update-page">
            <p>Update not found. Please check the URL and ensure it matches your update data.</p>
          </div>
        </main>
        <Footer />
      </Fragment>
    );
  }

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
              <img src={`/imgs/${section.imageKey}.jpg`} alt={section.content || 'Update Image'} tabIndex="0"/>
            </a>
          </div>
        );
      case 'paragraphWithLink':
        return (
          <p key={index}>
            {section.content}{' '}
            <a href={section.linkUrl} target="_blank" rel="noopener noreferrer" tabIndex="0">
              {section.linkText}
            </a>
          </p>
        );
      case 'list':
        return (
          <ul key={index}>
            {section.items.map((item, idx) => (
              <li key={idx} tabIndex="0">{item}</li>
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
      <main id="main-content" tabIndex="-1">
        <div className="update-page">
          <div className="update-header">
            <div className="update-header-top">
              <Link className="update-back-link" to="/updates" aria-label='Back to Updates'>
                <CornerUpLeft size={20} />
                <span>Back to Updates</span>
              </Link>
            </div>
            <h1 tabIndex="0">{update.title}</h1>
            <p className="update-date" tabIndex="0">Posted on {update.date}</p>
          </div>
          <div className="update-content" tabIndex="0">
            {update.sections.map((section, idx) => renderSection(section, idx))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UpdatesPage;