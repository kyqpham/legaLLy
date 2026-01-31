import React from "react";
import cases from "./Speeding_Cases.json"; // your JSON file

const Similarity = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ margin: 0 }}>Similar Cases</h1>
      <p style={{ margin: "0 0 20px 0" }}>Find outcomes for your case:</p>

      <div>
        {cases.map((c, index) => (
          <div
            key={index} // use index if no ID field
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h2 style={{ margin: "0 0 5px 0" }}>{c.Charge}</h2>
            <p style={{ margin: "0" }}>Case Type: {c.CaseType}</p>
            <p style={{ margin: "0" }}>Disposition: {c.FinalDisposition}</p>
            {c.Fine && <p style={{ margin: "0" }}>Fine: ${c.Fine}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Similarity;
