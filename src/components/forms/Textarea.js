import React from 'react';

const Textarea = ({ content, setContent, placeholder, ...otherProps }) => {
  return (
    <textarea
      onChange={(e) => setContent(e.target.value)}
      value={content}
      placeholder={placeholder}
      {...otherProps}
    />
  );
};

export default Textarea;
