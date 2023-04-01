import React from 'react';
import { IInputFile } from '../../../interface/inputsInterface';

export default function InputFile({
  label,
  id,
  type,
  isValidate,
  inputRef,
  errorMessage,
  onChangeFunc,
}: IInputFile) {
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
        ref={inputRef}
        onChange={onChangeFunc}
      />
      {isValidate === false && typeof errorMessage.file === 'string' ? (
        <p className="invalid-message">{errorMessage.file}</p>
      ) : (
        ''
      )}
    </div>
  );
}
