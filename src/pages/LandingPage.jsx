// src/pages/LandingPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="landing-header">
        <div className="landing-header-container">
          <div className="logo-landing">
            <span className="logo-icon">👋</span>
            <span className="logo-text">HandFlickAI</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Breaking Communication Barriers</h1>
          <p className="hero-subtitle">
            An inclusive classroom platform connecting teachers and deaf students through
            speech, text, and sign language powered by AI.
          </p>
        </div>
      </section>

      {/* User Type Selection */}
      <section className="user-selection">
        <div className="user-selection-container">
          <div className="user-card">
            <div className="user-icon">👨‍🎓</div>
            <h2 className="user-title">Student</h2>
            <p className="user-description">
              Join classrooms, communicate through sign language, and access learning materials.
            </p>
            <button 
              className="cta-button student-button"
              onClick={() => navigate('/student-login')}
            >
              Login as Student
            </button>
          </div>

          <div className="user-card">
            <div className="user-icon">👨‍🏫</div>
            <h2 className="user-title">Teacher</h2>
            <p className="user-description">
              Create classrooms, manage students, and deliver accessible lessons for all.
            </p>
            <button 
              className="cta-button teacher-button"
              onClick={() => navigate('/teacher-login')}
            >
              Login as Teacher
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <p>&copy; 2025 HandFlickAI. Empowering inclusive education.</p>
      </footer>
    </div>
  );
}

export default LandingPage;