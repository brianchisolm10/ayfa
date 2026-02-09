import React from 'react';
import './WhyAfya.css';
import TopNav from './TopNav';
import Footer from './Footer';

function WhyAfya() {
  return (
    <>
      <TopNav />
      <div className="why-afya-page">
        {/* Our Beliefs */}
        <section className="why-beliefs">
          <div className="beliefs-container">
            <h2>What We Believe</h2>
            <div className="beliefs-grid">
              <div className="belief-card">
                <div className="belief-accent"></div>
                <h3>Science Over Trends</h3>
                <p>Every program is built on exercise science and nutrition research, not fads</p>
              </div>
              <div className="belief-card">
                <div className="belief-accent"></div>
                <h3>Fitness for Everyone</h3>
                <p>Elite-level coaching shouldn't be exclusive. It should be accessible to all</p>
              </div>
              <div className="belief-card">
                <div className="belief-accent"></div>
                <h3>Simplicity Works</h3>
                <p>Great programs don't need to be complicated. They need to be personalized and actionable</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="why-how-it-works">
          <div className="how-container">
            <h2>How to Use AFYA</h2>
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">1</div>
                <h3>Choose Your Goal</h3>
                <p>Select whether you want a personalized workout or meal plan</p>
              </div>
              <div className="step-card">
                <div className="step-number">2</div>
                <h3>Answer Questions</h3>
                <p>Tell us about your fitness level, goals, preferences, and lifestyle</p>
              </div>
              <div className="step-card">
                <div className="step-number">3</div>
                <h3>Get Your Plan</h3>
                <p>Instantly receive a personalized program tailored just for you</p>
              </div>
              <div className="step-card">
                <div className="step-number">4</div>
                <h3>Start Training</h3>
                <p>Follow your plan and watch your progress unfold</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="why-mission">
          <div className="mission-container">
            <h2>Our Mission</h2>
            <p>We're building a world where everyone has access to elite-level fitness and nutrition guidance. No gatekeeping. No expensive coaches. Just science, personalization, and results.</p>
            <div className="mission-values">
              <div className="value">
                <h4>Community</h4>
                <p>We're in this together</p>
              </div>
              <div className="value">
                <h4>Discipline</h4>
                <p>Structured, science-backed programs</p>
              </div>
              <div className="value">
                <h4>Joy</h4>
                <p>Fitness should be enjoyable, not a chore</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="why-cta">
          <h2>Ready to Get Started?</h2>
          <p>Generate your personalized program in minutes</p>
          <div className="why-cta-buttons">
            <a href="/workout-generator" className="why-btn-primary">Generate Workout</a>
            <a href="/meal-plan-generator" className="why-btn-secondary">Create Meal Plan</a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default WhyAfya;
