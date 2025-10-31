import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">Get In <span className="gradient">Touch</span></h1>
          <p className="contact-subtitle">Have questions? We'd love to hear from you.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h2 className="info-heading">Contact Information</h2>
            
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div className="info-details">
                <h3>Email</h3>
                <p>support@handflick.ai</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📱</div>
              <div className="info-details">
                <h3>Phone</h3>
                <p>+92 (555) 123-4567</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-details">
                <h3>Location</h3>
                <p>Islamabad, Pakistan</p>
              </div>
            </div>

            <div className="social-section">
              <h3 className="social-heading">Follow Us</h3>
              <div className="social-links">
                <a href="https://facebook.com" className="social-btn" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://twitter.com" className="social-btn" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://linkedin.com" className="social-btn" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="abc@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can we help?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more..."
                rows={5}
              />
            </div>

            <button onClick={handleSubmit} className="submit-btn">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;