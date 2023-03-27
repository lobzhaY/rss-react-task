import { IErrorState, IValidationState } from '../interface/formInterface';

function validationPriceField(validationState: IValidationState, key: string): string | boolean {
  let errorResponse: string | boolean = '';
  const price = validationState[key];

  if (price.length > 8) {
    errorResponse = 'Enter a value from the range "10.00" - "99999.99"';
  } else if (price.indexOf('.') === -1 || price.indexOf('.') !== price.length - 3) {
    errorResponse = 'Enter a value according to the format "XX.XX"';
  } else {
    errorResponse = true;
  }
  return errorResponse;
}

function validationDescriptionField(
  validationState: IValidationState,
  key: string
): string | boolean {
  let errorResponse: string | boolean = '';
  const description = validationState[key].split(' ');

  if (description.length < 2) {
    errorResponse = 'The field value must be at least two words long';
  } else if (description[0].length < 5 || description[1].length < 5) {
    errorResponse = 'The minimum length of the words must be five characters';
  } else if (!/^[A-ZА-ЯЁ]+$/i.test(description[0]) || !/^[A-ZА-ЯЁ]+$/i.test(description[1])) {
    errorResponse = 'The first two words must contain only letters';
  } else {
    errorResponse = true;
  }
  return errorResponse;
}

function validationDeliveryField(validationState: IValidationState, key: string): string | boolean {
  let errorResponse: string | boolean = '';
  const delivery = new Date(validationState[key]);
  const now = new Date().toISOString().slice(0, 10);
  const today = new Date(now);

  if (delivery.getTime() < today.getTime()) {
    errorResponse = 'Enter a date in the future, not the past';
  } else {
    const inputDateArr = validationState[key].split('-');
    if (parseInt(inputDateArr[0], 10) !== today.getFullYear()) {
      errorResponse = 'Enter a future date this year';
    } else {
      errorResponse = true;
    }
  }

  return errorResponse;
}

function validationUtils(validationState: IValidationState): IErrorState {
  const errorSate: IErrorState = {};

  const validationStateKey = Object.keys(validationState);
  validationStateKey.forEach((key) => {
    if (validationState[key] !== '') {
      errorSate[key] = true;
    } else {
      errorSate[key] = 'Please fill in the field';
    }
  });

  const errorStateKeys = Object.keys(errorSate);
  errorStateKeys.forEach((key) => {
    if (errorSate[key] === true) {
      if (key === 'price') {
        errorSate[key] = validationPriceField(validationState, key);
      }
      if (key === 'description') {
        errorSate[key] = validationDescriptionField(validationState, key);
      }
      if (key === 'delivery') {
        errorSate[key] = validationDeliveryField(validationState, key);
      }
    }
  });

  return errorSate;
}

export default validationUtils;
