import React from 'react';

const Simplify = () => {
  const userInput = localStorage.getItem('userInput');

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
          <p>Item 1A</p>
          <p>Item 1B</p>
          <p>{userInput}</p>
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
          <p>Item 2A</p>
          <p>Item 2B</p>
        </div>

      </section>
    </div>
  );
};

export default Simplify;
