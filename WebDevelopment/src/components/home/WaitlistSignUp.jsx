import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import '../../styles/home/WaitlistSignUp.css';
import Modal from '../Modal';

const API_ENDPOINT = 'https://mesvi31h6k.execute-api.us-west-2.amazonaws.com/signup';

const WaitlistSignup = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [modalState, setModalState] = useState({
    isOpen: false
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const res = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      if (res.ok) {
        setModalState(prev => ({ ...prev, isOpen: true }));
        setEmail('');
      } else {
        alert("Sorry, something went wrong. Please contact exploravist@exploravist.net to get this fixed.");
      }
    } catch (err) {
      alert("Sorry, something went wrong. Please contact exploravist@exploravist.net to get this fixed.");
    } finally {
      setStatus('');
    }
  };

  const closeModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <section className="waitlist-section" role="region" aria-label="Join Waitlist">
      <div className="waitlist-container">
        <h2 className="waitlist-title">Join the Waitlist</h2>
        <p className="waitlist-description">
          Be the first to know when our device becomes available and receive updates about our progress.
        </p>

        <form onSubmit={handleSubmit} className="waitlist-form">
          <div className="input-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              aria-label="Email address"
              required
              disabled={status === 'submitting'}
            />
            <button
              type="submit"
              disabled={status === 'submitting' || !email}
              aria-label="Join waitlist"
            >
              {status === 'submitting' ? 'Joining...' : <>Join <ArrowRight size={20} aria-hidden="true" /></>}
            </button>
          </div>
        </form>
      </div>
      <Modal
        isOpen={modalState.isOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default WaitlistSignup;