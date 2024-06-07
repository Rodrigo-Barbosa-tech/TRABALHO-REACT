import React from 'react';

const Input = ({ placeholder, value, onChange }) => {
  return (
    <input 
      type="text" 
      placeholder={placeholder} 
      value={value} 
      onChange={onChange} 
      style={{ padding: '10px', margin: '10px 0', width: '100%' }} 
    />
  );
};

export default Input;
