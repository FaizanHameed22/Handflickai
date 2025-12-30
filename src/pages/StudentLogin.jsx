// src/pages/StudentLogin.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentLogin.css';

function StudentLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      navigate('/student-dashboard');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <div className="login-icon">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <rect width="60" height="60" rx="14" fill="#2B7FFF"/>
                <path d="M30 20L20 25V30C20 35.5 24 40.5 30 42C36 40.5 40 35.5 40 30V25L30 20Z" fill="white"/>
                <path d="M30 20V28L36 31" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h1 className="login-title">Welcome Back!</h1>
            <p className="login-subtitle">Sign in to access your academic dashboard</p>
          </div>
          
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Student Email</label>
              <div className="input-wrapper">
                <svg className="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 4H17C17.55 4 18 4.45 18 5V15C18 15.55 17.55 16 17 16H3C2.45 16 2 15.55 2 15V5C2 4.45 2.45 4 3 4Z" stroke="#6B7280" strokeWidth="1.5"/>
                  <path d="M18 5L10 11L2 5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input
                  type="email"
                  id="email"
                  placeholder="student@email.edu"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <svg className="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="3" y="8" width="14" height="9" rx="2" stroke="#6B7280" strokeWidth="1.5"/>
                  <path d="M6 8V6C6 3.79 7.79 2 10 2C12.21 2 14 3.79 14 6V8" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
                <button 
                  type="button" 
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 4C5 4 2 10 2 10C2 10 5 16 10 16C15 16 18 10 18 10C18 10 15 4 10 4Z" stroke="#6B7280" strokeWidth="1.5"/>
                    <circle cx="10" cy="10" r="2.5" stroke="#6B7280" strokeWidth="1.5"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                />
                <span>Remember me</span>
              </label>
              <a href="/forgot-password" className="forgot-password">Forgot password?</a>
            </div>
            
            <button type="submit" className="login-button">
              Sign In
            </button>

          </form>
          
          <div className="login-footer">
            <p>Don't have an account? <a href="/student-signup">Register here</a></p>
            <p className="support-link">Need help? <a href="/contact">Contact IT Support</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentLogin;