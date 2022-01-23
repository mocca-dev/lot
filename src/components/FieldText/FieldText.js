import { Field } from 'formik';
import React from 'react';

import './FieldText.css';

const FieldText = ({ placeholder, isGhost, label, type = 'text', name }) => {
  return (
    <>
      {label && <label>{label}</label>}
      {type === 'text' ? (
        <Field
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
        <Field
          as="textarea"
          className={
            'fieldtext-container ' +
            (isGhost ? 'border ' : '') +
            (label ? 'marginTop' : '')
          }
          id={name}
          name={name}
          rows="4"
          cols="50"
        ></Field>
      )}
      <div className="spacer"></div>
    </>
  );
};

export default FieldText;
