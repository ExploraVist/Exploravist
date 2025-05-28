import React, { Fragment, useState } from 'react';
import NavBar from '../components/Navbar';
import AdminLogin from '../components/admin/AdminLogin';
import Footer from '../components/Footer';

const Admin = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  let password = "12345";

  const handleSignIn = () => {
    if (passwordInput == password) setLoggedIn(true);
  }

  return (
    <Fragment>
      <NavBar/>
      <AdminLogin/>
      <Footer/>
    </Fragment>
  )
}

export default Admin