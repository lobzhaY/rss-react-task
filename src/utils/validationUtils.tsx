import {
  ERROR_MESSAGE_DELIVERY_PAST,
  ERROR_MESSAGE_DELIVERY_THIS_YEAR,
  ERROR_MESSAGE_DESCRIPTION_LENGTH,
  ERROR_MESSAGE_DESCRIPTION_ONLY_LETTER,
  ERROR_MESSAGE_DESCRIPTION_WORD_LENGTH,
  ERROR_MESSAGE_NUMBER_FORMAT,
  ERROR_MESSAGE_NUMBER_LENGTH,
} from '../constants/constants';

export function validationPriceField(priceForm: string): string | boolean {
  let errorResponse: string | boolean;
  const price = priceForm.toString();
  if (price.length > 8) {
    errorResponse = ERROR_MESSAGE_NUMBER_LENGTH;
  } else if (price.indexOf('.') === -1 || price.indexOf('.') !== price.length - 3) {
    errorResponse = ERROR_MESSAGE_NUMBER_FORMAT;
  } else {
    errorResponse = true;
  }
  return errorResponse;
}

export function validationDescriptionField(descriptionForm: string): string | boolean {
  let errorResponse: string | boolean = '';
  const description = descriptionForm.split(' ');
  if (description.length < 2) {
    errorResponse = ERROR_MESSAGE_DESCRIPTION_LENGTH;
  } else if (description[0].length < 5 || description[1].length < 5) {
    errorResponse = ERROR_MESSAGE_DESCRIPTION_WORD_LENGTH;
  } else if (!/^[A-ZА-ЯЁ]+$/i.test(description[0]) || !/^[A-ZА-ЯЁ]+$/i.test(description[1])) {
    errorResponse = ERROR_MESSAGE_DESCRIPTION_ONLY_LETTER;
  } else {
    errorResponse = true;
  }
  return errorResponse;
}

export function validationDeliveryField(deliveryForm: string): string | boolean {
  let errorResponse: string | boolean = '';
  const delivery = new Date(deliveryForm);
  const now = new Date().toISOString().slice(0, 10);
  const today = new Date(now);

  if (delivery.getTime() < today.getTime()) {
    errorResponse = ERROR_MESSAGE_DELIVERY_PAST;
  } else {
    const inputDateArr = delivery.getFullYear();
    if (inputDateArr !== today.getFullYear()) {
      errorResponse = ERROR_MESSAGE_DELIVERY_THIS_YEAR;
    } else {
      errorResponse = true;
    }
  }
  return errorResponse;
}
