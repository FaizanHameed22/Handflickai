import React from 'react';
import { Link } from 'react-router-dom';
import { FaHandPaper } from "react-icons/fa";   // Gesture Recognition
import { FaMicrophoneAlt } from "react-icons/fa"; // Voice Translation
import { FaBrain } from "react-icons/fa"; 
import { FaCamera } from "react-icons/fa";
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge"> AI-Powered Communication</div>
          <h1 className="hero-title">
            AI That Speaks <br />
            <span className="gradient-text">Through Hands</span>
          </h1>
          <p className="hero-subtitle">
            Breaking communication barriers with real-time sign language translation powered by artificial intelligence
          </p>
          <div className="hero-buttons">
            <button className="primary-btn">Try Demo</button>
            <button className="secondary-btn">Watch Video</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card card-1">
             <span className="card-icon">
      <FaHandPaper size={40} color="#007bff" />
    </span>
            <p className="card-text">Gesture Recognition</p>
          </div>
          <div className="floating-card card-2">
             <span className="card-icon">
      <FaMicrophoneAlt size={40} color="#007bff" />
    </span>
            <p className="card-text">Voice Translation</p>
          </div>
          <div className="floating-card card-3">
            <span className="card-icon">
      <FaBrain size={40} color="#007bff" />
    </span>
            <p className="card-text">AI Processing</p>
          </div>
        </div>
      </section>

      <section className="features-preview" id="features">
        <div className="stats-grid">
          <div className="stat-card">
            <h3 className="stat-number">99.5%</h3>
            <p className="stat-label">Accuracy Rate</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">&lt;100ms</h3>
            <p className="stat-label">Response Time</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">2</h3>
            <p className="stat-label">Sign Languages</p>
          </div>
        </div>
      </section>

      <section className="demo-section">
        <h2 className="section-title">See It In Action</h2>
        <div className="demo-container">
          <div className="demo-box input-box">
            <h3 className="demo-heading">Sign Input</h3>
            <div className="video-placeholder">
              <span className="placeholder-icon">
  <FaCamera size={50} color="#007bff" />
</span>
              <p>Camera feed displays here</p>
            </div>
          </div>
          <div className="demo-arrow">→</div>
          <div className="demo-box output-box">
            <h3 className="demo-heading">Translation Output</h3>
            <div className="text-placeholder">
              <p className="output-text">"Hello, how are you doing today?"</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Break Down Communication Barriers?</h2>
          <p className="cta-text">Join thousands of users making communication accessible for everyone</p>
          <Link to="/contact">
            <button className="cta-large-btn">Get Started Today</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;