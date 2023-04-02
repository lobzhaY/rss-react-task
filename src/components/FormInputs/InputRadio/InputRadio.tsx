import React from 'react';
import { IInputRadio } from '../../../interface/inputsInterface';

export default function InputRadio({
  nameInput,
  id,
  type,
  value,
  label,
  hookRegister,
}: IInputRadio) {
  return (
    <div>
      <input
        name={nameInput}
        id={id}
        type={type}
        value={value}
        /* eslint-disable-next-line react/jsx-props-no-spreading */
        {...hookRegister}
      />
      <label htmlFor={id} className="form-label">
        {label}
      </label>
    </div>
  );
}
