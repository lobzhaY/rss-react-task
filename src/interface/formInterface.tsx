export interface IValidationState {
  [key: string]: string;
}

export interface IFormFields {
  description: string;
  delivery: string;
  price: string;
  discount: string;
  person: string;
  file: File | null;
  material: string;
}

export interface ICardState {
  delivery: string;
  description: string;
  discount: string;
  file: string;
  material: string[];
  person: string;
  price: string;
}
