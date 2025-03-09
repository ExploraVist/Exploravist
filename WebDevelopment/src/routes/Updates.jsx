import React, { Fragment, useContext, useState } from 'react';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import GenerationTitle from '../components/GenerationTitle';
import ImageLink from '../components/ImageLink';
import Footer from '../components/Footer';
import { ChevronDown } from 'lucide-react';
import { UpdatesContext } from '../context/UpdatesContext';
import '../styles/Updates.css';

const UpdateItem = ({ update, defaultOpen }) => {
  const { imagesMap } = useContext(UpdatesContext);
  const [showDetails, setShowDetails] = useState(defaultOpen);

  const renderSection = (section, index) => {
    switch(section.type) {
      case 'paragraph':
        return <p key={index}>{section.content}</p>;
      case 'header':
        if(section.headerLevel === 3) {
          return <h3 key={index}>{section.content}</h3>;
        }
        return <h2 key={index}>{section.content}</h2>;
      case 'list':
        return (
          <ul key={index}>
            {section.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        );
      case 'paragraphWithLink':
        return (
          <p key={index}>
            {section.content}&nbsp;
            <Link className='updates_details_link' to={section.link.url}>{section.link.text}</Link>.
          </p>
        );
      case 'imageLink':
        return <ImageLink key={index} image={imagesMap[section.imageKey]} link={section.link} />;
      default:
        return null;
    }
  };

  return (
    <div className='updates_gen'>
      <GenerationTitle category={update.category} date={update.date} title={update.title} />
      <span className='updates_details_toggle' onClick={() => setShowDetails(!showDetails)}>
        <ChevronDown className={`icon ${showDetails ? 'rotate-down' : 'rotate-right'}`} size={30}/>
        <strong>Details</strong>
      </span>
      {showDetails && (
        <div className='updates_details'>
          {update.sections.map((section, index) => renderSection(section, index))}
          <div className='updates_details_end'/>
        </div>
      )}
    </div>
  );
};

const Updates = () => {
  const { updates } = useContext(UpdatesContext);

  return (
    <Fragment>
      <Navbar/>
      <main className='updates'>
        <section className='updates_generations'>
          <h1 className='updates_header'>Progress Updates</h1>
          {updates.map((update, index) => (
            <UpdateItem key={update.id} update={update} defaultOpen={index === 0} />
          ))}
        </section>
      </main>
      <Footer/>
    </Fragment>
  );
};

export default Updates;