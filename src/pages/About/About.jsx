import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-header">
          <h1 className="about-title">About <span className="gradient">Handflick.ai</span></h1>
          <p className="about-tagline">Empowering communication through innovative AI technology</p>
        </div>

        <section className="mission-section">
          <div className="mission-content">
            <h2 className="section-heading">Our Mission</h2>
            <p className="mission-text">
              At Handflick.ai, we believe communication is a fundamental human right. Our mission is to break down 
              barriers between the deaf and hearing communities by leveraging cutting-edge artificial intelligence 
              to provide real-time, accurate sign language translation.
            </p>
            <p className="mission-text">
              We're building a world where sign language is universally understood, creating inclusive spaces for 
              everyone to connect, learn, and thrive together.
            </p>
          </div>
        </section>

        <section className="technology-section">
          <h2 className="section-heading centered">Our Technology</h2>
          <div className="tech-grid">
            <div className="tech-card">
              <div className="tech-icon">🧠</div>
              <h3 className="tech-title">Deep Learning</h3>
              <p className="tech-description">
                Advanced neural networks trained on millions of sign language gestures for unparalleled accuracy
              </p>
            </div>
            <div className="tech-card">
              <div className="tech-icon">⚡</div>
              <h3 className="tech-title">Real-Time Processing</h3>
              <p className="tech-description">
                Lightning-fast translation with less than 100ms latency for seamless conversations
              </p>
            </div>
            <div className="tech-card">
              <div className="tech-icon">🌍</div>
              <h3 className="tech-title">Multi-Language Support</h3>
              <p className="tech-description">
                Support for 50+ sign language variants from around the world
              </p>
            </div>
          </div>
        </section>

        <section className="team-section">
          <h2 className="section-heading centered">Our Values</h2>
          <p className="team-intro">
            We're a passionate group of AI researchers, developers, and accessibility advocates dedicated to 
            making the world more inclusive.
          </p>
          <div className="team-values">
            <div className="value-item">
              <span className="value-emoji">💡</span>
              <h4>Innovation</h4>
              <p>Pushing boundaries with cutting-edge AI</p>
            </div>
            <div className="value-item">
              <span className="value-emoji">🤝</span>
              <h4>Inclusion</h4>
              <p>Building bridges between communities</p>
            </div>
            <div className="value-item">
              <span className="value-emoji">🎯</span>
              <h4>Impact</h4>
              <p>Creating meaningful change in lives</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;