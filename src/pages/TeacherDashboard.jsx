// src/pages/TeacherDashboard.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import './TeacherDashboard.css';

function TeacherDashboard() {
  const navigate = useNavigate();
  const [classroom, setClassroom] = useState({
    name: '',
    code: ''
  });
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState('');

  const sidebarItems = [
    { label: 'Dashboard', icon: '📊', path: '/teacher-dashboard' },
    { label: 'AI Tools', icon: '🤖', path: '/ai-tools' },
    { label: 'Settings', icon: '⚙️', path: '/teacher-dashboard' }
  ];

  const generateClassCode = () => {
    // Generate random 6-character code
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    setClassroom({ ...classroom, code });
  };

  const handleCreateClassroom = (e) => {
    e.preventDefault();
    if (!classroom.code) {
      generateClassCode();
    }
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (newStudent.trim()) {
      setStudents([...students, { id: Date.now(), name: newStudent }]);
      setNewStudent('');
    }
  };

  const handleStartClass = () => {
    if (classroom.name && classroom.code) {
      navigate('/teacher-classroom');
    } else {
      alert('Please create a classroom first!');
    }
  };

  return (
    <div className="dashboard-page">
      <Header />
      <div className="dashboard-layout">
        <Sidebar items={sidebarItems} />
        
        <main className="dashboard-main">
          <div className="dashboard-header">
            <h1>Teacher Dashboard</h1>
            <p>Create and manage your classroom</p>
          </div>

          <div className="dashboard-content">
            {/* Create Classroom Card */}
            <div className="dashboard-card">
              <h2 className="card-title">📚 Create Classroom</h2>
              <form className="classroom-form" onSubmit={handleCreateClassroom}>
                <div className="form-group">
                  <label htmlFor="className">Classroom Name</label>
                  <input
                    type="text"
                    id="className"
                    placeholder="e.g., Math 101"
                    value={classroom.name}
                    onChange={(e) => setClassroom({ ...classroom, name: e.target.value })}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="classCode">Class Code</label>
                  <div className="code-input-group">
                    <input
                      type="text"
                      id="classCode"
                      placeholder="Click generate"
                      value={classroom.code}
                      readOnly
                    />
                    <button 
                      type="button" 
                      className="generate-button"
                      onClick={generateClassCode}
                    >
                      Generate
                    </button>
                  </div>
                </div>
                
                <button type="submit" className="create-button">
                  Create Classroom
                </button>
              </form>

              {classroom.name && classroom.code && (
                <div className="classroom-info">
                  <p><strong>Classroom:</strong> {classroom.name}</p>
                  <p><strong>Code:</strong> <span className="code-badge">{classroom.code}</span></p>
                </div>
              )}
            </div>

            {/* Add Students Card */}
            <div className="dashboard-card">
              <h2 className="card-title">👥 Add Students</h2>
              <form className="student-form" onSubmit={handleAddStudent}>
                <div className="form-group">
                  <label htmlFor="studentName">Student Name</label>
                  <div className="student-input-group">
                    <input
                      type="text"
                      id="studentName"
                      placeholder="Enter student name"
                      value={newStudent}
                      onChange={(e) => setNewStudent(e.target.value)}
                    />
                    <button type="submit" className="add-button">
                      Add
                    </button>
                  </div>
                </div>
              </form>

              <div className="students-list">
                <h3>Students ({students.length})</h3>
                {students.length === 0 ? (
                  <p className="empty-state">No students added yet</p>
                ) : (
                  <ul>
                    {students.map(student => (
                      <li key={student.id} className="student-item">
                        <span>👤 {student.name}</span>
                        <button 
                          className="remove-button"
                          onClick={() => setStudents(students.filter(s => s.id !== student.id))}
                        >
                          ✕
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* Start Class Button */}
          <div className="start-class-section">
            <button 
              className="start-class-button"
              onClick={handleStartClass}
            >
              🎓 Start Class
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default TeacherDashboard;