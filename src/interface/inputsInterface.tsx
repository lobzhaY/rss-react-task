import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

export interface IInputNumberDateText {
  label: string;
  id: string;
  type: string;
  placeholder?: string;
  testId?: string;
  hookError: FieldError | Merge<FieldError, FieldErrorsImpl> | undefined;
  hookRegister: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLInputElement> &
    React.InputHTMLAttributes<HTMLInputElement>;
}

export interface IInputCheckbox {
  inputValue: string;
  val: string;
  hookRegister: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLInputElement> &
    React.InputHTMLAttributes<HTMLInputElement>;
}

export interface IInputFile {
  label: string;
  id: string;
  type: string;
  hookError: FieldError | Merge<FieldError, FieldErrorsImpl> | undefined;
  hookRegister: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLInputElement> &
    React.InputHTMLAttributes<HTMLInputElement>;
}

export interface IInputRadio {
  nameInput: string;
  id: string;
  type: string;
  value: string;
  label: string;
  hookRegister: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLInputElement> &
    React.InputHTMLAttributes<HTMLInputElement>;
}

export interface IInputSelect {
  label: string;
  id: string;
  hookError: FieldError | Merge<FieldError, FieldErrorsImpl> | undefined;
  hookRegister: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLSelectElement> &
    React.SelectHTMLAttributes<HTMLSelectElement>;
}
