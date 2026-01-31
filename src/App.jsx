import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';


import { useState } from 'react';

import './App.css';
import Simplify from './Simplify.jsx';

const Home = () => {

  const styleBackground = { backgroundColor: '#f0f0f0' };
  const navigate = useNavigate();
  const [userText, setUserText] = useState('');


  function autoGrow(e) {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  }




  return (
    <div className="App" style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontFamily: "Segoe UI', Roboto, sans-serif", color: "E0E0E0" }} >
      <h1 style={{ fontSize: "2.5rem", color: "#C5A059", fontWeight: "300", marginBottom: "2rem", letterSpacing: "2px", textTransform: "uppercase", alignItems: "center", padding: "20px" }}>
        Welcome to LegaLLy
      </h1>

      <div className="input-container" style={{ display: "flex" }}>

        <div style={{ width: "60%", maxWidth: "800px" }}>

          <textarea
            style={{
              width: "700px",
              maxWidth: "900px",
              marginBottom: "20px",
              minHeight: "5px",
              backgroundColor: "rgba(132, 169, 140, 0.1)",
              padding: "12px 12px 12px 12px",
              border: "1px solid #84A98C",
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
      </div>

      <button style={{ padding: "20px", fontWeight: "bold", color: "goldenrod" }} onClick={() => navigate('/simplify', { state: { userText } })} onMouseEnter={(e) => e.target.style.cursor = 'pointer'}>
        Analyze Case
      </button>
    </div>
  );
};

function App() {
  const styleBackground = { backgroundColor: '#f0f0f0' };




  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simplify" element={<Simplify />} />
      </Routes>
    </Router>
  );
}

export default App;
