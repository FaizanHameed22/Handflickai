import React from 'react';
import './Header.css';

const Header = ({ currentPage }) => {
  const handleNavClick = (page) => {
    if (window.navigateTo) {
      window.navigateTo(page);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section" onClick={() => handleNavClick('home')} style={{cursor: 'pointer'}}>
          {/* <div className="logo-icon">
            {/* <span className="hand-emoji">👋</span> */}
          {/* </div> */}
          <h1 className="logo-text">Handflick<span className="ai-text">.ai</span></h1>
        </div>
        
        <nav className="nav-menu">
          <a 
            href="#home" 
            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
          >
            Home
          </a>
          <a 
            href="#features" 
            className={`nav-link ${currentPage === 'features' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
          >
            Features
          </a>
          <a 
            href="#about" 
            className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
          >
            About
          </a>
          <a 
            href="#contact" 
            className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
          >
            Contact
          </a>
        </nav>

        <button className="cta-button" onClick={() => handleNavClick('home')}>Get Started</button>
      </div>
    </header>
  );
};

export default Header;