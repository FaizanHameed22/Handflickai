// src/components/ToolCard.jsx
import React, { useState } from 'react';
import './ToolCard.css';

function ToolCard({ title, icon, inputType, outputType, onConvert }) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleConvert = () => {
    setIsProcessing(true);
    
    // Simulate AI processing delay
    setTimeout(() => {
      const result = onConvert(input);
      setOutput(result);
      setIsProcessing(false);
    }, 1000);
  };

  const renderInput = () => {
    if (inputType === 'text') {
      return (
        <textarea
          className="tool-input"
          placeholder="Enter text here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows="4"
        />
      );
    } else if (inputType === 'speech') {
      return (
        <button 
          className="tool-action-button mic-button"
          onClick={() => {
            // Simulate speech recognition - replace with real Web Speech API
            setInput('Simulated speech input: "Hello, how are you?"');
          }}
        >
          🎤 Click to Speak
        </button>
      );
    } else if (inputType === 'sign') {
      return (
        <button 
          className="tool-action-button camera-button"
          onClick={() => {
            // Simulate sign language detection - replace with real computer vision
            setInput('Simulated sign detected: [HELLO gesture]');
          }}
        >
          📷 Capture Sign
        </button>
      );
    }
  };

  const renderOutput = () => {
    if (outputType === 'text') {
      return <div className="tool-output">{output || 'Converted text will appear here...'}</div>;
    } else if (outputType === 'speech') {
      return (
        <div className="tool-output">
          {output && (
            <>
              <p>{output}</p>
              <button className="play-button">▶️ Play Audio</button>
            </>
          )}
          {!output && <p>Audio will play here...</p>}
        </div>
      );
    } else if (outputType === 'sign') {
      return (
        <div className="tool-output sign-output">
          {output ? (
            <>
              <div className="sign-animation">👋 🤟 👍</div>
              <p>{output}</p>
            </>
          ) : (
            <p>Sign animation will appear here...</p>
          )}
        </div>
      );
    }
  };

  return (
    <div className="tool-card">
      <div className="tool-card-header">
        <span className="tool-icon">{icon}</span>
        <h3 className="tool-title">{title}</h3>
      </div>
      
      <div className="tool-card-body">
        <div className="tool-section">
          <label className="tool-label">Input:</label>
          {renderInput()}
        </div>
        
        <button 
          className="convert-button"
          onClick={handleConvert}
          disabled={!input || isProcessing}
        >
          {isProcessing ? '⏳ Converting...' : '🔄 Convert'}
        </button>
        
        <div className="tool-section">
          <label className="tool-label">Output:</label>
          {renderOutput()}
        </div>
      </div>
    </div>
  );
}

export default ToolCard;