import React, { useState } from 'react';
import '../../styles/home/WaitlistSignUp.css';

const API_ENDPOINT = 'https://mesvi31h6k.execute-api.us-west-2.amazonaws.com/signup';

const WaitlistSignup = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

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
        alert("Thank you for joining! We'll reach out shortly with updates.");
        setEmail('');
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (err) {
      alert('Something went wrong. Please try again.');
    } finally {
      setStatus('');
    }
  };

  return (
    <section className="waitlist-section" role="region" aria-label="Join Waitlist">
      <div className="waitlist-container">
        <h2 className="waitlist-title" tabIndex="0">Join the Waitlist</h2>
        <p className="waitlist-description" tabIndex="0">
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
              {status === 'submitting' ? 'Joining...' : 'Join →'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default WaitlistSignup;