import React, { ReactNode } from 'react';
import { IInputNumberDateText } from '../../../interface/inputsInterface';

export default function InputNumberDateText({
  label,
  id,
  type,
  placeholder = '',
  testId = '',
  hookError,
  hookRegister,
}: IInputNumberDateText) {
  return (
    <div className="item-form-container">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        data-testid={testId}
        step="any"
        /* eslint-disable-next-line react/jsx-props-no-spreading */
        {...hookRegister}
      />
      {hookError && <p className="invalid-message">{hookError.message as ReactNode}</p>}
    </div>
  );
}
