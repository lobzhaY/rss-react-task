export interface IValidationState {
  [key: string]: string;
}

export interface IErrorState {
  [key: string]: boolean | string;
}

export interface IErrorMessage {
  [key: string]: string;
}

export interface IRef {
  [key: string]: React.RefObject<HTMLInputElement>;
}
export interface IForm {
  formRef: React.RefObject<HTMLFormElement>;
}
export interface ISelect {
  [key: string]: React.RefObject<HTMLSelectElement>;
}

export interface IDiscount {
  [key: string]: React.RefObject<HTMLInputElement>;
}

export interface IMaterial {
  [key: string]: React.RefObject<HTMLInputElement>;
}

export interface IFile {
  [key: string]: React.RefObject<HTMLInputElement>;
}

export interface IFileState {
  [key: string]: File | null;
}
