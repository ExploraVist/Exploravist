import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';

const RootLayout = () => {
  return (
    <Fragment>
      <ScrollToTop />
      <Outlet />
    </Fragment>
  );
};

export default RootLayout;