// src/pages/TeacherLogin.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TeacherLogin.css';

function TeacherLogin() {
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
      navigate('/teacher-dashboard');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <div className="login-icon">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <rect width="60" height="60" rx="14" fill="#8B5CF6"/>
                <path d="M30 20L20 25V30C20 35.5 24 40.5 30 42C36 40.5 40 35.5 40 30V25L30 20Z" fill="white"/>
                <path d="M30 20V28L36 31" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="30" cy="28" r="3" fill="white"/>
              </svg>
            </div>
            <h1 className="login-title">Teacher Portal</h1>
            <p className="login-subtitle">Sign in to manage your classes and students</p>
          </div>
          
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Teacher Email</label>
              <div className="input-wrapper">
                <svg className="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 4H17C17.55 4 18 4.45 18 5V15C18 15.55 17.55 16 17 16H3C2.45 16 2 15.55 2 15V5C2 4.45 2.45 4 3 4Z" stroke="#6B7280" strokeWidth="1.5"/>
                  <path d="M18 5L10 11L2 5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input
                  type="email"
                  id="email"
                  placeholder="teacher@university.edu"
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

            {/* <div className="divider">
              <span>OR CONTINUE WITH</span>
            </div> */}

            {/* <div className="social-buttons">
              <button type="button" className="social-button">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M18.17 8.36H10V11.73H14.72C14.33 13.42 12.88 14.64 10 14.64C6.83 14.64 4.27 12.08 4.27 8.91C4.27 5.74 6.83 3.18 10 3.18C11.45 3.18 12.76 3.72 13.76 4.6L16.29 2.07C14.68 0.6 12.49 -0.27 10 -0.27C4.62 -0.27 0.27 4.08 0.27 9.46C0.27 14.84 4.62 19.19 10 19.19C14.88 19.19 18.82 15.82 18.82 10.46C18.82 9.73 18.72 9.03 18.17 8.36Z" fill="#4285F4"/>
                </svg>
                Google
              </button>
              <button type="button" className="social-button">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M16.5 10C16.5 8.9 16.4 8.2 16.2 7.5H10V12H13.8C13.7 12.8 13.2 13.8 12.2 14.5L15.1 16.7C15.9 15.9 16.5 14.6 16.5 12.8V10Z" fill="black"/>
                  <path d="M10 17C12.2 17 14.1 16.3 15.5 15.1L12.6 12.9C11.9 13.4 11 13.7 10 13.7C7.9 13.7 6.1 12.3 5.5 10.4L2.5 12.7C3.9 15.5 6.7 17 10 17Z" fill="black"/>
                </svg>
                Apple
              </button>
            </div> */}
          </form>
          
          <div className="login-footer">
            <p>Don't have an account? <a href="/teacher-signup">Register here</a></p>
            <p className="support-link">Need help? <a href="/contact">Contact IT Support</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherLogin;