// src/pages/TeacherClassroom.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header/Header.jsx';
import './TeacherClassroom.css';

function TeacherClassroom() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const [connectedStudents] = useState([
    { id: 1, name: 'Alice Johnson', status: 'online' },
    { id: 2, name: 'Bob Smith', status: 'online' },
    { id: 3, name: 'Carol Davis', status: 'offline' }
  ]);

  // Simulate speech recognition - replace with real Web Speech API
  const handleMicClick = () => {
    setIsRecording(true);
    
    // Simulate speech-to-text conversion
    setTimeout(() => {
      const simulatedSpeech = "Hello class, today we will learn about fractions.";
      
      // Add teacher's message to chat
      const newMessage = {
        id: Date.now(),
        sender: 'teacher',
        type: 'speech-to-text',
        text: simulatedSpeech,
        signPlaceholder: '👋 📚 ➗', // Placeholder for sign language animation
        timestamp: new Date().toLocaleTimeString()
      };
      
      setMessages([...messages, newMessage]);
      setIsRecording(false);
    }, 2000);
  };

  return (
    <div className="classroom-page">
      <Header />
      
      <div className="classroom-header">
        <div className="classroom-info">
          <button className="back-button" onClick={() => navigate('/teacher-dashboard')}>
            ← Back
          </button>
          <h1>Math 101 - Live Class</h1>
          <span className="live-indicator">🔴 Live</span>
        </div>
      </div>

      <div className="classroom-layout">
        {/* Main Chat Area */}
        <div className="classroom-main">
          <div className="messages-container">
            {messages.length === 0 ? (
              <div className="empty-chat">
                <p>📢 Start speaking to communicate with your students</p>
              </div>
            ) : (
              messages.map(message => (
                <div key={message.id} className="message teacher-message">
                  <div className="message-header">
                    <strong>👨‍🏫 You</strong>
                    <span className="message-time">{message.timestamp}</span>
                  </div>
                  <div className="message-content">
                    <div className="message-text">
                      <p>{message.text}</p>
                    </div>
                    <div className="message-sign">
                      <label>Sign Language:</label>
                      <div className="sign-animation">
                        {message.signPlaceholder}
                      </div>
                      <small>Sign animation shown to students</small>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Input Controls */}
          <div className="input-controls">
            <button 
              className={`mic-button ${isRecording ? 'recording' : ''}`}
              onClick={handleMicClick}
              disabled={isRecording}
            >
              {isRecording ? (
                <>
                  <span className="recording-pulse"></span>
                  🎤 Recording...
                </>
              ) : (
                <>🎤 Click to Speak</>
              )}
            </button>
            <p className="input-hint">
              {/* Where to integrate: Connect to Web Speech API for real-time speech recognition */}
              Speech will be converted to text and sign language for students
            </p>
          </div>
        </div>

        {/* Students Panel */}
        <aside className="students-panel">
          <h3>Connected Students ({connectedStudents.filter(s => s.status === 'online').length})</h3>
          <div className="students-list">
            {connectedStudents.map(student => (
              <div key={student.id} className="student-card">
                <div className="student-avatar">👤</div>
                <div className="student-info">
                  <p className="student-name">{student.name}</p>
                  <span className={`student-status ${student.status}`}>
                    {student.status === 'online' ? '🟢 Online' : '⚫ Offline'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

export default TeacherClassroom;