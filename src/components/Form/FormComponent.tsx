import React from 'react';

import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';

import InputCheckbox from '../FormInputs/InputCheckbox/InputCheckbox';
import InputFile from '../FormInputs/InputFile/InputFile';
import InputRadio from '../FormInputs/InputRadio/InputRadio';
import InputNumberDateText from '../FormInputs/InputsNumberDateText/InputDate';
import InputSelect from '../FormInputs/InputSelect/InputSelect';
import PopUp from '../PopUp/PopUpComponent';

import { ICardState } from '../../interface/formInterface';

import {
  ERROR_MESSAGE,
  ERROR_MESSAGE_NUMBER_LENGTH,
  INPUT_SELECT_OPTIONS,
} from '../../constants/constants';
import {
  validationDeliveryField,
  validationDescriptionField,
  validationPriceField,
} from '../../utils/validationUtils';

export default function FormComponent({
  updateAllCards,
  updateFile,
}: {
  updateAllCards: (card: ICardState) => void;
  updateFile: (fileUrl: string) => void;
}) {
  const [isModalActive, setIsModalActive] = React.useState(false);
  const [fileState, setFileState] = React.useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ICardState>();

  const changeFormPhoto = (files: FileList) => {
    const objectURL = URL.createObjectURL(files[0] as Blob | MediaSource);
    updateFile(objectURL);
    setFileState(objectURL);
  };

  const handleSubmitClick: SubmitHandler<ICardState> = (data) => {
    if (!data.file) return;
    const cardData = {
      ...data,
      delivery: new Date(data.delivery).toDateString(),
      file: fileState,
    };
    setIsModalActive(true);
    setTimeout(() => {
      setIsModalActive(false);
      setFileState('');
      updateFile('');
      updateAllCards(cardData);
      reset();
    }, 2000);
  };

  return (
    <form className="form" onSubmit={handleSubmit(handleSubmitClick)}>
      {isModalActive && <PopUp />}
      <div className="form-container">
        <InputNumberDateText
          label="description"
          id="description"
          type="text"
          testId="forms-description__input"
          placeholder="СЕРЕБРЯНЫЕ СЕРЬГИ С ЯНТАРЁМ"
          hookRegister={{
            ...register('description', {
              required: ERROR_MESSAGE,
              validate: (value) => validationDescriptionField(value),
            }),
          }}
          hookError={errors.description}
        />
        <InputNumberDateText
          label="date of delivery"
          id="delivery"
          type="date"
          testId="forms-delivery__input"
          hookRegister={{
            ...register('delivery', {
              required: ERROR_MESSAGE,
              valueAsDate: true,
              validate: (value) => validationDeliveryField(value),
            }),
          }}
          hookError={errors.delivery}
        />
      </div>
      <div className="form-container">
        <InputNumberDateText
          label="price"
          id="price"
          type="number"
          placeholder="722.40"
          hookRegister={{
            ...register('price', {
              validate: (value) => validationPriceField(value),
              required: ERROR_MESSAGE,
              max: {
                value: 99999.99,
                message: ERROR_MESSAGE_NUMBER_LENGTH,
              },
              min: {
                value: 10.0,
                message: ERROR_MESSAGE_NUMBER_LENGTH,
              },
            }),
          }}
          hookError={errors.price}
        />
        <div className="item-form-container">
          <p className="form-label">Discount</p>
          <div className="form-discount">
            <InputRadio
              nameInput="discount"
              id="0"
              type="radio"
              value="0"
              label="without discount"
              hookRegister={{ ...register('discount', { required: ERROR_MESSAGE }) }}
            />
            <InputRadio
              nameInput="discount"
              id="5"
              type="radio"
              value="5"
              label="5%"
              hookRegister={{ ...register('discount', { required: ERROR_MESSAGE }) }}
            />
            <InputRadio
              nameInput="discount"
              id="10"
              type="radio"
              value="10"
              label="10%"
              hookRegister={{ ...register('discount', { required: ERROR_MESSAGE }) }}
            />
            <InputRadio
              nameInput="discount"
              id="15"
              type="radio"
              value="15"
              label="15%"
              hookRegister={{ ...register('discount', { required: ERROR_MESSAGE }) }}
            />
          </div>
          {errors.discount && <p className="invalid-message">{errors.discount.message}</p>}
        </div>
      </div>
      <div className="form-container">
        <InputSelect
          label="FOR WHOM"
          id="person"
          hookError={errors.person}
          hookRegister={{
            ...register('person', {
              required: true,
              validate: (value) => value !== INPUT_SELECT_OPTIONS[0] || ERROR_MESSAGE,
            }),
          }}
        />
        <InputFile
          label="Image"
          id="file"
          type="file"
          hookRegister={{
            ...register('file', {
              required: ERROR_MESSAGE,
              onChange: (e) => changeFormPhoto(e.target.files),
            }),
          }}
          hookError={errors.file}
        />
      </div>
      <div className="item-form-container-last">
        <p className="form-label"> TYPE OF METAL</p>
        <div className="form-discount">
          <InputCheckbox
            inputValue="Pink gold"
            val="Pink gold"
            hookRegister={{ ...register('material', { required: ERROR_MESSAGE }) }}
          />
          <InputCheckbox
            inputValue="White gold"
            val="White gold"
            hookRegister={{ ...register('material', { required: ERROR_MESSAGE }) }}
          />
          <InputCheckbox
            inputValue="Combined Gold"
            val="Combined Gold"
            hookRegister={{ ...register('material', { required: ERROR_MESSAGE }) }}
          />
          <InputCheckbox
            inputValue="Yellow Gold"
            val="Yellow Gold"
            hookRegister={{ ...register('material', { required: ERROR_MESSAGE }) }}
          />
          <InputCheckbox
            inputValue="Silver"
            val="Silver"
            hookRegister={{ ...register('material', { required: ERROR_MESSAGE }) }}
          />
          <InputCheckbox
            inputValue="Combined Silver"
            val="Combined Silver"
            hookRegister={{ ...register('material', { required: ERROR_MESSAGE }) }}
          />
          <InputCheckbox
            inputValue="Silver Gilded"
            val="Silver Gilded"
            hookRegister={{ ...register('material', { required: ERROR_MESSAGE }) }}
          />
        </div>
        {errors.material && <p className="invalid-message">{errors.material.message}</p>}
      </div>
      <div className="form-button">
        <button type="submit" data-testid="forms-submit">
          Submit
        </button>
      </div>
    </form>
  );
}
