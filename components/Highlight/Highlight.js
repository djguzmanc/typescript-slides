import React from 'react';

const Highlight = ({ children, color = '#e7a90b' }) => (
  <span className="highlighted" style={{ color }}>
    {children}
  </span>
);

export default Highlight;
