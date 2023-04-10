import React, { ReactNode } from 'react';
import { INPUT_SELECT_OPTIONS } from '../../../constants/constants';
import { IInputSelect } from '../../../interface/inputsInterface';

export default function InputSelect({ label, id, hookError, hookRegister }: IInputSelect) {
  return (
    <div className="item-form-container">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <select
        id={id}
        /* eslint-disable-next-line react/jsx-props-no-spreading */
        {...hookRegister}
      >
        {INPUT_SELECT_OPTIONS.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {hookError && <p className="invalid-message">{hookError.message as ReactNode}</p>}
    </div>
  );
}
