// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-icon">👋</span>
          <span className="logo-text">HandFlickAI</span>
        </Link>
        <nav className="nav">
          <Link to="/ai-tools" className="nav-link">AI Tools</Link>
          <Link to="/" className="nav-link">Home</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;