import React, { Fragment, useState } from 'react';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UpdatesHero from '../components/updates/UpdatesHero';

const Updates = () => {
  return (
    <Fragment>
      <Navbar/>
      <UpdatesHero/>
      <Footer/>
    </Fragment>
  );
};

export default Updates;