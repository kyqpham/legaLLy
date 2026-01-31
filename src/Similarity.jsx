// src/Similarity.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const Similarity = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "20px" }}>
      <h1>Similarity Page</h1>
      <p> Using this summary for similar case search:</p>
      <div>
        <h1 style={{ margin: 0 }}>Similar Cases</h1>
        <p style={{ margin: 0 }}>Find outcomes for your case:</p>
      </div>
    </div>

  );
};

export default Similarity;
