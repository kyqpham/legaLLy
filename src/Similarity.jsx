// src/Similarity.jsx
import React from "react";
import { useLocation } from "react-router-dom";

const Similarity = () => {
  const location = useLocation();

  return (
    <div>
    <h1 style={{ margin: 0 }}>Similar Cases</h1>
    <p style={{ margin: 0 }}>Find outcomes for your case:</p>
    </div>

  );
};

export default Similarity;
