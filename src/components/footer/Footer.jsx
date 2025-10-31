import React from 'react';
import './Footer.css';

const Footer = () => {
  const handleNavClick = (page) => {
    if (window.navigateTo) {
      window.navigateTo(page);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">Handflick<span className="ai-accent">.ai</span></h3>
            <p className="footer-tagline">Breaking barriers through AI-powered sign language translation</p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Home</a></li>
              <li><a href="#features" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Features</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About Us</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Connect</h4>
            <div className="social-icons">
              <a href="#facebook" className="social-link">Facebook</a>
              <a href="#twitter" className="social-link">Twitter</a>
              <a href="#linkedin" className="social-link">LinkedIn</a>
              <a href="#github" className="social-link">GitHub</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© 2024 Handflick.ai - All rights reserved</p>
          <p className="made-with">Made with 💙 for accessibility</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;