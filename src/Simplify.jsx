import React from 'react';

const Simplify = () => {
  const userInput = localStorage.getItem('userInput');
  return (
    <div >
      <h2> {userInput} </h2>
    </div>
  );
};

export default Simplify;
