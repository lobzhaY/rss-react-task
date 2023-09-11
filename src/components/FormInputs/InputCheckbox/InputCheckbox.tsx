import React from 'react';

import { IInputCheckbox } from '../../../interface/inputsInterface';

export default function InputCheckbox({ inputValue, val, hookRegister }: IInputCheckbox) {
  return (
    <label className="form-label">
      <input
        type="checkbox"
        value={inputValue}
        /* eslint-disable-next-line react/jsx-props-no-spreading */
        {...hookRegister}
      />{' '}
      {val}
    </label>
  );
}
