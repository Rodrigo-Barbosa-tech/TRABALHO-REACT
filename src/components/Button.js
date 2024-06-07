import React from 'react';

const Button = ({ type, onClick, children }) => {
  const buttonStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50px',
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <button type={type} style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
