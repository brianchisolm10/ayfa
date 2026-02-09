import React from 'react';
import './CTA.css';

function CTA() {
  return (
    <section className="cta">
      <div className="cta-container">
        <div className="donate-section">
          <p className="donate-text">Have feedback or questions? We'd love to hear from you</p>
          <a href="/contact" className="donate-link">Send Us Feedback</a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
