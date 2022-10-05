import React from 'react';

const Expand = ({ isOpen, children, title}) => {
  if(!isOpen) {
    return(
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button className="expand__toggle-btn"><i className="fas fa-chevron-down" onClick={this.showText}></i></button>
        </div>
      </div>
    );   
  }
  else if (isOpen) {
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button className="expand__toggle-btn"><i className="fas fa-chevron-down" onClick={this.hideText}></i></button>
        </div>
        <div className="expand__content">{children}</div>
      </div>
      
    );
  }
};

export default Expand;