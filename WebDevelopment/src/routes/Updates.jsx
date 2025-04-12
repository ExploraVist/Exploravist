import React, { Fragment, useState } from 'react';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Updates.css';

const Updates = () => {
  return (
    <Fragment>
      <Navbar/>
      <p>Updates</p>
      <Footer/>
    </Fragment>
  );
};

export default Updates;