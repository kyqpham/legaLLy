import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';


import { useState } from 'react';

import './App.css';
import Simplify from './Simplify.jsx';
import Similarity from "./Similarity.jsx";

const Home = () => {
  const navigate = useNavigate();
  const [userText, setUserText] = useState('');


  function autoGrow(e) {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  }

  return (
    <div className="App">
      <h1 style={{ fontSize: "20px", color: "goldenrod", alignItems: "center", padding: "20px" }}>
        Welcome to LegaLLy
      </h1>

      <div className="input-container" style={{ display: "flex", justifyContent: "center", }}>
        <textarea
          style={{
            width: "700px",
            maxWidth: "900px",
            marginBottom: "20px",
            minHeight: "5px",

            padding: "12px 12px 12px 12px",

            border: "1px solid #0b121c80",
            borderRadius: "10px",
            fontSize: "16px",
            lineHeight: "1.4",

            resize: "none",
            overflow: "hidden",
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",

          }}
          className="input-box"
          value={userText}
          onChange={(e) => {
            setUserText(e.target.value);
            autoGrow(e);
          }}
          placeholder="How can I help you . . ."

        />
      </div>

      <button style={{ padding: "20px" }} onClick={() => navigate('/simplify', { state: { userText } })}>
        Analyze Case
      </button>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simplify" element={<Simplify />} />
        <Route path="/similarity" element={<Similarity />} />
      </Routes>
    </Router>
    

    
  );
}

export default App;