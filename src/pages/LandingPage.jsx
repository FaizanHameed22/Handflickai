// src/pages/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegHandPeace, FaRegUserCircle, FaChalkboardTeacher, FaBookOpen, FaDeaf } from 'react-icons/fa';
import { MdTranslate, MdKeyboardVoice } from 'react-icons/md';
import { IoMdConstruct } from 'react-icons/io';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { ImPencil2 } from 'react-icons/im';
import './LandingPage.css';

// Main Landing Page for HandFlickAI
// Designed for clarity, accessibility, and visual communication (icons, simple cues)

function LandingPage() {
  return (
    <div className="landing-page">
      {/* Header: Logo + minimalist app nav */}
      <header className="landing-header" aria-label="Main header">
        <div className="landing-header__container">
          <div className="logo-landing" tabIndex="0">
            <FaRegHandPeace className="logo-icon" aria-label="HandFlickAI hand logo" />
            <span className="logo-text">HandFlick<span className="logo-ai">AI</span></span>
          </div>
        </div>
      </header>

      <main id="main-content" className="landing-main" aria-label="Main content">
        {/* Hero Section: Title, Tagline, and Clear CTAs */}
        <section className="landing-hero" aria-labelledby="hero-heading">
          <div className="landing-hero__content">
            <h1 className="landing-hero__title" id="hero-heading">
              Communication—Accessible to All
            </h1>
            <p className="landing-hero__subtitle">
              Where teachers and deaf students connect naturally: powered by AI, bridging sign and speech in every classroom.
            </p>
            <div className="landing-hero__actions">
              <Link 
                to="/student-login" 
                className="cta-button cta-button--student" 
                aria-label="Login as Student"
              >
                <FaRegUserCircle aria-label="student icon" /> Student Login
              </Link>
              <Link 
                to="/teacher-login" 
                className="cta-button cta-button--teacher" 
                aria-label="Login as Teacher"
              >
                <FaChalkboardTeacher aria-label="teacher icon" /> Teacher Login
              </Link>
            </div>
          </div>
        </section>

        {/* About Section: Visual summary with icons/sign cues */}
        <section className="landing-about" aria-labelledby="about-heading">
          <div className="landing-about__visual" aria-hidden="true">
            <FaRegHandPeace className="about-hand-icon" title="sign language icon" />
            <HiOutlineArrowNarrowRight className="about-arrow" title="arrow right" />
            <ImPencil2 className="about-text-icon" title="text/writing icon" />
          </div>
          <div className="landing-about__desc">
            <h2 id="about-heading">What is HandFlickAI?</h2>
            <p className="landing-about__summary">
              HandFlickAI turns sign language into speech/text and vice versa—making every lesson fully accessible, comfortable, and engaging for everyone.
            </p>
          </div>
        </section>

        {/* Features Section: With icons for each major functionality */}
        <section className="landing-features" aria-labelledby="features-heading">
          <h2 id="features-heading" className="landing-features__title">Platform Highlights</h2>
          <div className="landing-features__grid">
            <div className="feature-card" aria-label="Real-time translation">
              <MdTranslate className="feature-card__icon" />
              <div className="feature-card__label">Live Speech ↔ Sign Translation</div>
            </div>
            <div className="feature-card" aria-label="Easy classroom join">
              <FaBookOpen className="feature-card__icon" />
              <div className="feature-card__label">Instant Class Join</div>
            </div>
            <div className="feature-card" aria-label="Assistive tools">
              <IoMdConstruct className="feature-card__icon" />
              <div className="feature-card__label">AI Support Tools</div>
            </div>
            <div className="feature-card" aria-label="Accessible for deaf users">
              <FaDeaf className="feature-card__icon" />
              <div className="feature-card__label">Designed for Deaf Accessibility</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="landing-footer" aria-label="Site footer">
        <div className="footer-content">
          <span>
            &copy; 2025 <span className="footer-brand">HandFlickAI</span> — Empowering Inclusive Education
          </span>
          <nav className="footer-links" aria-label="Footer navigation">
            <a href="#main-content" className="footer-link">Skip to Top</a>
            <a href="#" className="footer-link">Privacy</a>
            <a href="#" className="footer-link">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;