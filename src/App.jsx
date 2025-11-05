// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import pages
import LandingPage from './pages/LandingPage';
import TeacherLogin from './pages/TeacherLogin';
import StudentLogin from './pages/StudentLogin';
import TeacherDashboard from './pages/TeacherDashboard';
import StudentDashboard from './pages/StudentDashboard';
import TeacherClassroom from './pages/TeacherClassroom';
import StudentClassroom from './pages/StudentClassroom';
import AITools from './pages/AITools';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/teacher-login" element={<TeacherLogin />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/teacher-classroom" element={<TeacherClassroom />} />
          <Route path="/student-classroom" element={<StudentClassroom />} />
          <Route path="/ai-tools" element={<AITools />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;