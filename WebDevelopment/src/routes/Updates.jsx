import React, { Fragment, useState } from 'react';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UpdatesHero from '../components/updates/UpdatesHero';
import '../styles/Updates.css';

const Updates = () => {
  return (
    <Fragment>
      <Navbar/>
      <main id="main-content" tabIndex="-1">
        <UpdatesHero/>
      </main>
      <Footer/>
    </Fragment>
  );
};

export default Updates;