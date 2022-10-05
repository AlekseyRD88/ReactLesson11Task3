import React from 'react';

const Expand = ({ children, title}) => {
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn"><i className="fas fa-chevron-up"></i></button>
      </div>
      <div className="expand__content">{children}</div>
    </div>
    
  );
};

export default Expand;