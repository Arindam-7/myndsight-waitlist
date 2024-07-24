import React, { useState, useRef, useEffect } from 'react';
import "../../styles.css";
import emailjs from '@emailjs/browser';

function Navbar() {
  const [showEmailPrompt, setShowEmailPrompt] = useState(false);
  const [email, setEmail] = useState('');
  const [statusMessage, setStatusMessage] = useState(''); // state for email sent msg

  
  const form = useRef();

  // useeffect hook to hide the submission status after 3 sec
  useEffect(() => {
    if (statusMessage) {
      const timer = setTimeout(() => {
        setStatusMessage('');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [statusMessage]);

  const handleButtonClick = () => {
    setShowEmailPrompt(true);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID, 
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
      form.current, {
      publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
    })
    .then (
      () => {
        console.log('Email Sent');
        setStatusMessage('Submitted successfully!');
        setEmail('');
        setShowEmailPrompt(false);
      },
      (error) => {
        setStatusMessage('Failed to submit.');
        console.log('Email FAILED to send...', error.text);
      },
    );
  };

  return (
    <nav className="navbar">
      <div className="logo">Myndsight</div>
      {statusMessage && ( 
        <div className="status-message">
          {statusMessage}
        </div>
      )}
      <div className="nav-buttons">
        {!showEmailPrompt && (
          <button
            className="waitlist-button"
            onClick={handleButtonClick}
          >
            Join Waitlist
          </button>
        )}
      </div>
      {showEmailPrompt && (
        <div className="email-prompt">
          <form ref={form} onSubmit={handleFormSubmit} className="email-form">
            <input
              type="email"
              name='user_email_id'
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              className="email-input"
              required
            />
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      )}
    </nav>
  );
}

export default Navbar;