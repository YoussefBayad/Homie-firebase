import React from 'react';
import '../../../default.scss';

const Button = ({ children, ...otherProps }) => {
  return (
    <button className="btn" {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
