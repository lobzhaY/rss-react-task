import React from 'react';
import { IInputRadio } from '../../../interface/inputsInterface';

export default function InputRadio({ nameInput, inputRef, id, type, value, label }: IInputRadio) {
  return (
    <div>
      <input name={nameInput} ref={inputRef} id={id} type={type} value={value} />
      <label htmlFor={id} className="form-label">
        {label}
      </label>
    </div>
  );
}
