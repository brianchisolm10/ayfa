import React, { useState } from 'react';
import './Contact.css';
import TopNav from './TopNav';
import Footer from './Footer';

function Contact() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [messageForm, setMessageForm] = useState({ email: '', message: '' });
  const [messageSent, setMessageSent] = useState(false);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

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
          <h1>Help</h1>
        </section>

        <div className="contact-content">
          <div className="help-topics">
            {/* FAQ Section */}
            <div className="faq-section">
              <h3>FREQUENTLY ASKED</h3>
              <div className="faq-list">
                {[
                  { q: "How do I generate a workout?", a: "Click on \"Generate Workout\" from the hub, answer a quick 3-step questionnaire about your fitness level, goals, and available equipment, and we'll create a personalized program for you." },
                  { q: "How accurate are the calculations?", a: "We use scientifically-backed formulas like the Mifflin-St Jeor equation for BMR calculations and evidence-based macro ratios. Results are personalized based on your specific data and training goals." },
                  { q: "Can I modify the programs?", a: "Absolutely! The programs are starting points. Feel free to adjust exercises, sets, reps, or meals based on your preferences and how your body responds to training." },
                  { q: "Do I need an account?", a: "No! You can generate workouts and meal plans without an account. However, creating an account allows you to save your programs and track your progress over time." },
                  { q: "Can I save my programs?", a: "Yes! Create an account to save multiple workout and meal plans. You can access them anytime and track how your programs evolve as you progress." },
                  { q: "What about dietary preferences?", a: "Our meal plan generator supports various dietary preferences including omnivore, vegetarian, vegan, keto, and paleo. Select your preference during the questionnaire." },
                  { q: "How do I track progress?", a: "Create a profile to save your programs and track metrics over time. Monitor your strength gains, body composition changes, and nutrition adherence through your saved programs." },
                  { q: "Is there a mobile app?", a: "AFYA is currently available as a web application. You can access it on any device with a browser. We're working on native mobile apps for iOS and Android." }
                ].map((item, index) => (
                  <div key={index} className="faq-item">
                    <button 
                      className={`faq-question ${expandedFaq === index ? 'active' : ''}`}
                      onClick={() => toggleFaq(index)}
                    >
                      <span>{item.q}</span>
                      <span className="faq-toggle">{expandedFaq === index ? '−' : '+'}</span>
                    </button>
                    {expandedFaq === index && (
                      <div className="faq-answer">
                        <p>{item.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="contact-sidebar">
            <div className="contact-methods-container">
              <h3>CONTACT US</h3>
              <p className="contact-intro">Choose how you'd like to reach us</p>
              
              <div className="contact-methods-grid">
                <div className="contact-method-box call-method">
                  <div className="method-header">
                    <h4>📞 Call</h4>
                  </div>
                  <div className="method-details">
                    <p className="contact-phone">1-800-AFYA-123</p>
                    <p className="availability">Mon-Fri: 9am - 5pm PST</p>
                    <p className="method-note">Best for urgent issues or detailed questions</p>
                  </div>
                </div>

                <div className="contact-method-box message-method">
                  <div className="method-header">
                    <h4>✉️ Message</h4>
                  </div>
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
                      rows="3"
                    />
                    <button type="submit" className="message-submit">Send</button>
                  </form>
                  <p className="method-note">Response within 24 hours. Great for feedback and feature requests</p>
                  <p className="contact-email"><a href="mailto:afya@theafya.org">afya@theafya.org</a></p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
