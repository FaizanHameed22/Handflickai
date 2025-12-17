// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import pages
import LandingPage from './pages/LandingPage.jsx';
import TeacherLogin from './pages/TeacherLogin.jsx';
import StudentLogin from './pages/StudentLogin.jsx';
import TeacherDashboard from './pages/TeacherDashboard.jsx';
import StudentDashboard from './pages/StudentDashboard.jsx';
import TeacherClassroom from './pages/TeacherClassroom.jsx';
// import StudentClassroom from './pages/StudentClassroom.jsx';
// import AITools from './pages/AITools.jsx';

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
          {/* <Route path="/student-classroom" element={<StudentClassroom />} /> */}
          {/* <Route path="/ai-tools" element={<AITools />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;