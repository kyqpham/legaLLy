import React from 'react';
import { useLocation } from "react-router-dom";
import { useState } from 'react';

const Simplify = () => {

  const location = useLocation();
  const userText = location.state?.userText || "";

  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

const handleSummarize = async () => {
  console.log("hi");
  setLoading(true);

  const res = await fetch("http://localhost:3001/summarize", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: userText }),
  });

  const data = await res.json();
  setSummary(data.summary);
  console.log("hello");
  console.log(data.summary);
  setLoading(false);
};

  return (
    <div>
      <section style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '20px',
        flexDirection: 'row',
        height: '80vh',
        width: '100vw',
      }}>

        <div
          style={{
            gap: '10px',
            width: '45%',
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid #ccc',
          }}
        >
          <p>{userText}</p>

          <button style={{ marginTop: '20px', padding: '10px 20px' }} onClick={handleSummarize}>
              Summarize
          </button>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '2rem',
            width: '45%',
            padding: '10px',
            borderRadius: '8px',
            marginRight: '20px',
            border: '1px solid #ccc'
          }}
        >
          <p> {summary}</p>
        </div>

      </section>


      <button style={{ marginTop: '20px', padding: '10px 20px' }}>
        More Information
      </button>


      <button style={{ marginTop: '20px', padding: '10px 20px' }}>
        More Information2
      </button>

    </div>
  );
};

export default Simplify;