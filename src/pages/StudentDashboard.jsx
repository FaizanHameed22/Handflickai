// src/pages/StudentDashboard.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import './StudentDashboard.css';

function StudentDashboard() {
  const navigate = useNavigate();
  const [classCode, setClassCode] = useState('');
  const [joinedClass, setJoinedClass] = useState(null);

  const sidebarItems = [
    { label: 'Dashboard', icon: '📊', path: '/student-dashboard' },
    { label: 'AI Tools', icon: '🤖', path: '/ai-tools' },
    { label: 'Settings', icon: '⚙️', path: '/student-dashboard' }
  ];

  const handleJoinClass = (e) => {
    e.preventDefault();
    if (classCode.trim()) {
      // Simulate joining classroom - in real app, validate code with backend
      setJoinedClass({
        name: 'Math 101', // Simulated classroom name
        code: classCode.toUpperCase()
      });
    }
  };

  const handleEnterClassroom = () => {
    if (joinedClass) {
      navigate('/student-classroom');
    }
  };

  return (
    <div className="dashboard-page">
      <Header />
      <div className="dashboard-layout">
        <Sidebar items={sidebarItems} />
        
        <main className="dashboard-main">
          <div className="dashboard-header">
            <h1>Student Dashboard</h1>
            <p>Join your classroom and start learning</p>
          </div>

          <div className="dashboard-content">
            {/* Join Classroom Card */}
            <div className="dashboard-card join-card">
              <h2 className="card-title">🚪 Join Classroom</h2>
              <form className="join-form" onSubmit={handleJoinClass}>
                <div className="form-group">
                  <label htmlFor="classCode">Enter Class Code</label>
                  <input
                    type="text"
                    id="classCode"
                    placeholder="e.g., ABC123"
                    value={classCode}
                    onChange={(e) => setClassCode(e.target.value.toUpperCase())}
                    maxLength="6"
                    required
                  />
                  <p className="input-hint">Ask your teacher for the 6-digit class code</p>
                </div>
                
                <button type="submit" className="join-button">
                  Join Class
                </button>
              </form>

              {joinedClass && (
                <div className="joined-info">
                  <div className="success-icon">✅</div>
                  <p><strong>Successfully joined:</strong></p>
                  <p className="class-name">{joinedClass.name}</p>
                  <p className="class-code-display">Code: {joinedClass.code}</p>
                  <button 
                    className="enter-classroom-button"
                    onClick={handleEnterClassroom}
                  >
                    Enter Classroom
                  </button>
                </div>
              )}
            </div>

            {/* My Classes Card */}
            <div className="dashboard-card">
              <h2 className="card-title">📚 My Classes</h2>
              <div className="classes-list">
                {joinedClass ? (
                  <div className="class-item">
                    <div className="class-icon">📖</div>
                    <div className="class-details">
                      <h3>{joinedClass.name}</h3>
                      <p>Code: {joinedClass.code}</p>
                    </div>
                    <button 
                      className="enter-button"
                      onClick={handleEnterClassroom}
                    >
                      Enter
                    </button>
                  </div>
                ) : (
                  <p className="empty-state">No classes joined yet</p>
                )}
              </div>
            </div>
          </div>

          {/* Quick Access Section */}
          <div className="quick-access-section">
            <h2>Quick Access</h2>
            <div className="quick-access-grid">
              <button 
                className="quick-access-card"
                onClick={() => navigate('/ai-tools')}
              >
                <span className="quick-icon">🤖</span>
                <span>AI Tools</span>
              </button>
              <button className="quick-access-card">
                <span className="quick-icon">📝</span>
                <span>Assignments</span>
              </button>
              <button className="quick-access-card">
                <span className="quick-icon">📊</span>
                <span>Progress</span>
              </button>
              <button className="quick-access-card">
                <span className="quick-icon">💬</span>
                <span>Messages</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default StudentDashboard;