import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Simplify from './Simplify.jsx';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="App">
      <h1 style={{ fontSize: "20px", color: "goldenrod", alignItems: "center", padding: "20px" }}>
        Welcome to LegaLLy
      </h1>
      <input
        style={{
          padding: "20px",
          width: "100%",
          borderRadius: "20px",
          marginBottom: "20px",
          maxWidth: "600px",
          minHeight: "100px",
          overflowWrap: "break-word",
          wordWrap: "break-word",
          whiteSpace: "pre-wrap",
          border: "1px solid #ccc",
          fontSize: "16px",
        }}
        type="text"
        placeholder="How can I help you . . ."
      />
      <button style={{ padding: "20px" }} onClick={() => navigate('/simplify')}>
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
      </Routes>
    </Router>
  );
}

export default App;
