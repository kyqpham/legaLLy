import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";



const Simplify = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const userText = location.state?.userText || "";


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

        </div>

      </section>


      <button style={{ marginTop: '20px', padding: '10px 20px' }} onClick={() => navigate('/button1')} >
        More Information
      </button>


      <button style={{ marginTop: '20px', padding: '10px 20px' }} onClick={() => navigate('/button2')}>
        More Information2
      </button>

    </div>
  );
};

export default Simplify;
