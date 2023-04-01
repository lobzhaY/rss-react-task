import { IErrorState } from './formInterface';

export interface IInputNumberDateText {
  label: string;
  id: string;
  type: string;
  placeholder?: string;
  isValidate: boolean;
  errorMessage: IErrorState;
  inputRef: React.RefObject<HTMLInputElement>;
  testId?: string;
}

export interface IInputCheckbox {
  inputValue: string;
  inputRef: React.RefObject<HTMLInputElement>;
  val: string;
}

export interface IInputFile {
  label: string;
  id: string;
  type: string;
  isValidate: boolean;
  inputRef: React.RefObject<HTMLInputElement>;
  errorMessage: IErrorState;
  onChangeFunc: () => void;
}

export interface IInputRadio {
  nameInput: string;
  inputRef: React.RefObject<HTMLInputElement>;
  id: string;
  type: string;
  value: string;
  label: string;
}
