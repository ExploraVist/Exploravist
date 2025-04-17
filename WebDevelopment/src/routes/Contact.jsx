import React, { Fragment, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Mail } from 'lucide-react'
import '../styles/Contact.css'

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('exploravist@exploravist.net')
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <Fragment>
        <Navbar/>
          <main className='contact'>
            <section className='contact_hero'>
              <p className='contact_header' tabIndex='0'>Contact Us!</p>
              <h2 className='contact_paragraph' tabIndex='0'>We’re always looking for passionate individuals to support our mission of developing affordable accessibility devices. Right now, we’re seeking new funding opportunities and expanding our network of Blind and Visually Impaired contacts.</h2>
              <p className='contact_paragraph' tabIndex='0'><i>If you’re interested in receiving a device</i> as part of our development feedback program, we’d love to hear from you! Your insights are invaluable in shaping our technology. Feel free to reach out by clicking the email below to get involved!</p>
              <div className='contact_link' onClick={handleCopyEmail} title="Click to copy email" aria-label="Click to copy email" tabIndex='0'>
                <Mail className='contact_mail_icon' size={30}/>
                <p className='contact_mail_address'>exploravist@exploravist.net</p>
              </div>
              <br/>
              <br/>
              {copied && <p className='contact_copied_notification'>Email address copied to clipboard!</p>}
            </section>
          </main>
          <br/>
          <br/>
          <br/>
        <Footer/>
    </Fragment>
  )
}

export default Contact

