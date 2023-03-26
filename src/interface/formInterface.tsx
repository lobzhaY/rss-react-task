export interface IValidationState {
  [key: string]: string;
}

export interface IErrorState {
  [key: string]: boolean | string;
}

export interface IErrorMessage {
  [key: string]: string;
}
