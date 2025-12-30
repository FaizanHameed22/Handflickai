import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./TeacherClassroom.css";

const TeacherClassroom = () => {
  const [text, setText] = useState("");
  const [signData, setSignData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [speechMessage, setSpeechMessage] = useState("");
  
  const recognitionRef = useRef(null);

  useEffect(() => {
    // Check if browser supports speech recognition
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onstart = () => {
        setIsListening(true);
        setSpeechMessage("🎤 Listening... Start speaking now!");
      };

      recognitionRef.current.onresult = (event) => {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript + ' ';
          } else {
            interimTranscript += transcript;
          }
        }

        if (finalTranscript) {
          setText(prevText => prevText + finalTranscript);
        }
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
        setSpeechMessage("");
        setError(`Speech recognition error: ${event.error}`);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
        setSpeechMessage("");
      };
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const handleSpeak = () => {
    if (!recognitionRef.current) {
      setError("Speech recognition is not supported in your browser.");
      return;
    }

    if (isListening) {
      // Stop listening
      recognitionRef.current.stop();
      setIsListening(false);
      setSpeechMessage("");
    } else {
      // Start listening
      setError("");
      setSpeechMessage("Starting...");
      try {
        recognitionRef.current.start();
      } catch (err) {
        console.error('Error starting recognition:', err);
        setError("Could not start speech recognition. Please try again.");
        setSpeechMessage("");
      }
    }
  };

  const handleConvert = async () => {
    if (!text.trim()) return;

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/speech-to-sign/",
        { text },
        {
          withCredentials: true, // VERY IMPORTANT for Django sessions
        }
      );

      setSignData(response.data.sign_mappings);
    } catch (err) {
      setError("Failed to convert text. Are you logged in?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="classroom-container">
      <h1 className="classroom-title">Teacher Classroom</h1>

      <div className="classroom-layout">
        {/* LEFT SIDE */}
        <div className="classroom-left">
          <h2>Teacher Input</h2>

          <textarea
            placeholder="Speak or type text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div className="button-group">
            <button 
              className={`primary-btn ${isListening ? 'listening' : ''}`}
              onClick={handleSpeak}
            >
              {isListening ? '🔴 Stop Speaking' : '🎤 Speak'}
            </button>
            <button className="secondary-btn" onClick={handleConvert}>
              Convert to Sign
            </button>
          </div>

          {speechMessage && <p className="speech-message">{speechMessage}</p>}
          {error && <p className="error-text">{error}</p>}
        </div>

        {/* RIGHT SIDE */}
        <div className="classroom-right">
          <h2>Animated Output:</h2>

          {loading ? (
            <p className="placeholder-text">Processing...</p>
          ) : signData.length === 0 ? (
            <p className="placeholder-text">
               Output will appear here
            </p>
          ) : (
            <div className="sign-output">
              {signData.map((item, index) => (
                <div key={index} className="sign-card">
                  {item.available ? (
                    <video
                      src={`http://127.0.0.1:8000${item.video_path}`}
                      controls
                      autoPlay
                      muted
                      className="sign-video"
                    />
                  ) : (
                    <div className="sign-video">❌</div>
                  )}
                  <p>{item.token}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeacherClassroom;