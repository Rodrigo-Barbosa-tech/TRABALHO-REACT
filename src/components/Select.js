import React from 'react';

const Select = ({ value, onChange, children }) => {
  return (
    <select value={value} onChange={onChange} style={{ padding: '10px', margin: '10px 0', width: '100%' }}>
      {children}
    </select>
  );
};

export default Select;
