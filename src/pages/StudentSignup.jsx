// src/pages/StudentSignup.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header/Header.jsx';
import './StudentLogin.css'; // mirror StudentLogin for design

function StudentSignup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    classGrade: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    if (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.classGrade &&
      formData.password &&
      formData.confirmPassword
    ) {
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      // On success: navigate to student dashboard
      navigate('/student-dashboard');
    }
  };

  return (
    <div className="login-page">
      <Header />
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <div className="login-icon">📝</div>
            <h2 className="login-title">Student Sign Up</h2>
            <p className="login-subtitle">Create your account to start learning</p>
          </div>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="student@school.com"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="classGrade">Class/Grade</label>
              <input
                type="text"
                id="classGrade"
                placeholder="e.g. 10th Grade, 2-B"
                value={formData.classGrade}
                onChange={e => setFormData({ ...formData, classGrade: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={e => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={e => setFormData({ ...formData, confirmPassword: e.target.value })}
                required
              />
            </div>
            <button type="submit" className="login-button">Sign Up</button>
          </form>
          <div className="login-footer">
            <p>
              Already have an account?{' '}
              <a href="/student-login">Sign in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentSignup;

