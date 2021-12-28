import React from 'react';

import './FieldText.css';

const FieldText = ({ placeholder }) => {
  return (
    <input
      className="fieldtext-container"
      type="text"
      name="name"
      id="mame"
      placeholder={placeholder}
    />
  );
};

export default FieldText;
