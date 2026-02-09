import React from 'react';
import TopNav from './TopNav';
import Footer from './Footer';
import './Resources.css';

function Resources() {
  const categories = [
    {
      title: 'Training & Movement',
      description: 'Strength, cardio, flexibility, and injury prevention',
      icon: '💪'
    },
    {
      title: 'Nutrition & Diet',
      description: 'Macros, meal planning, and dietary guidelines',
      icon: '🥗'
    },
    {
      title: 'Health & Wellness',
      description: 'Sleep, stress management, and recovery',
      icon: '❤️'
    },
    {
      title: 'Science & Research',
      description: 'Evidence-based studies and professional resources',
      icon: '🔬'
    }
  ];

  return (
    <>
      <TopNav />
      <div className="resources-page">
        <section className="resources-hero">
          <div className="hero-content">
            <h1>Resources</h1>
            <p>Explore evidence-based guides and tools to support your fitness journey</p>
          </div>
        </section>

        <div className="resources-container">
          <div className="categories-grid">
            {categories.map((category, index) => (
              <div key={index} className="category-card">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <a href="#" className="category-link">Explore →</a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Resources;
