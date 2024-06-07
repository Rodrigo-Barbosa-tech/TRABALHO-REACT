import React from 'react';

const BodyForm = ({ children }) => {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      {children}
    </div>
  );
};

export default BodyForm;
