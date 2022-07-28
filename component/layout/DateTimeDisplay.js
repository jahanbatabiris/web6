import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div style={{backgroundColor: '#1A1525',padding:'10px 20px',borderRadius:'5px',border:'none'}} className={isDanger ? 'countdown danger' : 'countdown'}>
      <p style={{color:'white',}}>{value}</p>
      <span style={{color:'white',}}>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;