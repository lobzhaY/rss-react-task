import React, { ReactNode } from 'react';
import { IInputFile } from '../../../interface/inputsInterface';

export default function InputFile({ label, id, type, hookError, hookRegister }: IInputFile) {
  return (
    <div className="item-form-container">
      <label className="form-label label-file" htmlFor={id}>
        {label}
        <span className="material-symbols-outlined label-file-icon">drive_folder_upload</span>
      </label>
      <input
        type={type}
        accept="image/png, image/gif, image/jpeg, image/jpg"
        id={id}
        style={{ display: 'none' }}
        /* eslint-disable-next-line react/jsx-props-no-spreading */
        {...hookRegister}
      />
      {hookError && <p className="invalid-message">{hookError.message as ReactNode}</p>}
    </div>
  );
}
