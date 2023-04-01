import React from 'react';
import { IInputNumberDateText } from '../../../interface/inputsInterface';

export default function InputNumberDateText({
  label,
  id,
  type,
  placeholder = '',
  isValidate,
  inputRef,
  errorMessage,
  testId = '',
}: IInputNumberDateText) {
  return (
    <div className="item-form-container">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input type={type} ref={inputRef} placeholder={placeholder} id={id} data-testid={testId} />
      {isValidate === false && typeof errorMessage[id] === 'string' ? (
        <p className="invalid-message">{errorMessage[id]}</p>
      ) : (
        ''
      )}
    </div>
  );
}
