// src/pages/NewClassroom.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './NewClassroom.css';

function NewClassroom() {
  const location = useLocation();
  const navigate = useNavigate();

  // Get classroom data passed via state
  const { classroom } = location.state || { classroom: { name: '', code: '' } };

  const handleBack = () => {
    navigate('/teacher-dashboard');
  };

  return (
    <div className="new-classroom-page">
      <div className="new-classroom-container">
        <h1>🎉 Classroom Created!</h1>
        <p>Your new classroom has been successfully created.</p>

        <div className="classroom-details">
          <p>
            <strong>Classroom Name:</strong> {classroom.name}
          </p>
          <p>
            <strong>Class Code:</strong> <span className="code-badge">{classroom.code}</span>
          </p>
        </div>

        <button className="back-button" onClick={handleBack}>
          ← Back to Dashboard
        </button>
      </div>
    </div>
  );
}

export default NewClassroom;
