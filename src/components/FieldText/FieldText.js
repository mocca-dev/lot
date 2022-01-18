import React, { useEffect, useState } from 'react';

import './FieldText.css';

const FieldText = ({ placeholder, isGhost, label, type = 'text' }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (label) setName(label.split(' ')[0]);
  }, [label]);

  return (
    <>
      {label && <label>{label}</label>}
      {type === 'text' ? (
        <input
          className={
            'fieldtext-container ' +
            (isGhost ? 'border ' : '') +
            (label ? 'marginTop' : '')
          }
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
        />
      ) : (
        <textarea
          className={
            'fieldtext-container ' +
            (isGhost ? 'border ' : '') +
            (label ? 'marginTop' : '')
          }
          id={name}
          name={name}
          rows="4"
          cols="50"
        ></textarea>
      )}
      <div className="spacer"></div>
    </>
  );
};

export default FieldText;
