// src/pages/TeacherSignup.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TeacherSignup.css';

function TeacherSignup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    if (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.subject &&
      formData.password &&
      formData.confirmPassword
    ) {
      navigate('/teacher-dashboard');
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-card">
          <div className="signup-header">
            <div className="signup-icon">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <rect width="60" height="60" rx="14" fill="#8B5CF6"/>
                <path d="M30 20L20 25V30C20 35.5 24 40.5 30 42C36 40.5 40 35.5 40 30V25L30 20Z" fill="white"/>
                <path d="M30 20V28L36 31" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="30" cy="28" r="3" fill="white"/>
              </svg>
            </div>
            <h1 className="signup-title">Teacher Sign Up</h1>
            <p className="signup-subtitle">Create your account to get started</p>
          </div>
          
          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <div className="input-wrapper">
                  <svg className="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 10C12.21 10 14 8.21 14 6C14 3.79 12.21 2 10 2C7.79 2 6 3.79 6 6C6 8.21 7.79 10 10 10Z" stroke="#6B7280" strokeWidth="1.5"/>
                    <path d="M17 18C17 14.13 13.87 11 10 11C6.13 11 3 14.13 3 18" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Enter first name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <div className="input-wrapper">
                  <svg className="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 10C12.21 10 14 8.21 14 6C14 3.79 12.21 2 10 2C7.79 2 6 3.79 6 6C6 8.21 7.79 10 10 10Z" stroke="#6B7280" strokeWidth="1.5"/>
                    <path d="M17 18C17 14.13 13.87 11 10 11C6.13 11 3 14.13 3 18" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Enter last name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
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
              <label htmlFor="subject">Subject/Specialization</label>
              <div className="input-wrapper">
                <svg className="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 4H16C16.55 4 17 4.45 17 5V15C17 15.55 16.55 16 16 16H4C3.45 16 3 15.55 3 15V5C3 4.45 3.45 4 4 4Z" stroke="#6B7280" strokeWidth="1.5"/>
                  <path d="M7 8H13M7 12H10" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <input
                  type="text"
                  id="subject"
                  placeholder="e.g. Mathematics, Physics"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
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

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="input-wrapper">
                <svg className="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="3" y="8" width="14" height="9" rx="2" stroke="#6B7280" strokeWidth="1.5"/>
                  <path d="M6 8V6C6 3.79 7.79 2 10 2C12.21 2 14 3.79 14 6V8" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  required
                />
                <button 
                  type="button" 
                  className="toggle-password"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 4C5 4 2 10 2 10C2 10 5 16 10 16C15 16 18 10 18 10C18 10 15 4 10 4Z" stroke="#6B7280" strokeWidth="1.5"/>
                    <circle cx="10" cy="10" r="2.5" stroke="#6B7280" strokeWidth="1.5"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <button type="submit" className="signup-button">
              Create Account
            </button>
          </form>
          
          <div className="signup-footer">
            <p>Already have an account? <a href="/teacher-login">Sign in</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherSignup;