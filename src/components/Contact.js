import React, { useState } from 'react';
import './Contact.css';
import TopNav from './TopNav';
import Footer from './Footer';

function Contact() {
  const [messageForm, setMessageForm] = useState({ email: '', message: '' });
  const [messageSent, setMessageSent] = useState(false);

  const handleMessageChange = (e) => {
    const { name, value } = e.target;
    setMessageForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    console.log('Message sent:', messageForm);
    setMessageSent(true);
    setTimeout(() => {
      setMessageForm({ email: '', message: '' });
      setMessageSent(false);
    }, 3000);
  };

  return (
    <>
      <TopNav />
      <div className="contact-page">
        <section className="contact-hero">
          <h1>Send Us Feedback</h1>
          <p>We'd love to hear from you. Share your thoughts, suggestions, or report any issues.</p>
        </section>

        <div className="contact-container">
          <div className="contact-form-wrapper">
            <h2>Get in Touch</h2>
            {messageSent && (
              <div className="message-success">✓ Message sent! We'll get back to you soon.</div>
            )}
            <form onSubmit={handleMessageSubmit} className="message-form">
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={messageForm.email}
                onChange={handleMessageChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your message"
                value={messageForm.message}
                onChange={handleMessageChange}
                required
                rows="6"
              />
              <button type="submit" className="message-submit">Send Message</button>
            </form>
          </div>

          <div className="contact-info">
            <h2>Contact Info</h2>
            <div className="info-item">
              <h3>Email</h3>
              <p><a href="mailto:afya@theafya.org">afya@theafya.org</a></p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
