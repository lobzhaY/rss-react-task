import React from 'react';
import { IInputCheckbox } from '../../../interface/inputsInterface';

export default function InputCheckbox({ inputRef, inputValue, val }: IInputCheckbox) {
  return (
    <label className="form-label">
      <input type="checkbox" ref={inputRef} value={inputValue} /> {val}
    </label>
  );
}
