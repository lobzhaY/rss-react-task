import React from 'react';
import {
  IDiscount,
  IErrorState,
  IFile,
  IFileState,
  IForm,
  IMaterial,
  IRef,
  ISelect,
  IValidationState,
} from '../../interface/formInterface';
import validationUtils from '../../utils/validationUtils';
import InputCheckbox from '../FormInputs/InputCheckbox/InputCheckbox';
import InputFile from '../FormInputs/InputFile/InputFile';
import InputRadio from '../FormInputs/InputRadio/InputRadio';
import InputNumberDateText from '../FormInputs/InputsNumberDateText/InputDate';

export default function FormComponent({
  updateAllCards,
  updateFile,
}: {
  updateAllCards: (card: IValidationState) => void;
  updateFile: (fileUrl: string) => void;
}) {
  const fileState: IFileState = {
    file: null,
  };

  const refState: IRef = {
    descriptionRef: React.createRef(),
    deliveryRef: React.createRef(),
    priceRef: React.createRef(),
  };

  const refSelect: ISelect = {
    personRef: React.createRef(),
  };

  const refFile: IFile = {
    fileRef: React.createRef(),
  };

  const refDiscount: IDiscount = {
    discount0Ref: React.createRef(),
    discount5Ref: React.createRef(),
    discount10Ref: React.createRef(),
    discount15Ref: React.createRef(),
  };

  const refMaterial: IMaterial = {
    pinkGoldRef: React.createRef(),
    whiteGoldRef: React.createRef(),
    combinedGoldRef: React.createRef(),
    yellowGoldRef: React.createRef(),
    silverRef: React.createRef(),
    combinedSilverRef: React.createRef(),
    silverGildedRef: React.createRef(),
  };

  const refForm: IForm = {
    formRef: React.createRef(),
  };

  const [isModalActive, setIsModalActive] = React.useState(false);
  const [isValidate, setIsValidate] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState<IErrorState>({});

  const handleSubmitClick = () => {
    const validateState: IValidationState = {
      description: '',
      delivery: '',
      price: '',
      discount: '',
      person: '',
      file: '',
      material: '',
    };

    const validateStateKeys = Object.keys(validateState);
    const refStateKeys = Object.keys(refState);
    refStateKeys.forEach((elem, index) => {
      if (elem.slice(0, -3) === validateStateKeys[index]) {
        validateState[validateStateKeys[index]] = refState[refStateKeys[index]].current!.value;
      }
    });

    const [fileDec] = refFile.fileRef.current!.files as FileList;
    fileState.file = fileDec;

    if (fileDec !== undefined) {
      const objectURL = URL.createObjectURL(refFile.fileRef.current!.files![0] as Blob);
      validateState.file = objectURL;
    } else {
      validateState.file = '';
    }

    validateState.person = refSelect.personRef.current!.value;

    const validateDiscountKeys = Object.keys(refDiscount);
    validateDiscountKeys.forEach((el) => {
      if (refDiscount[el].current!.checked === true)
        validateState.discount = refDiscount[el].current!.value;
    });

    const validateMaterialKeys = Object.keys(refMaterial);
    const materialArr: string[] = [];
    validateMaterialKeys.forEach((el) => {
      if (refMaterial[el].current!.checked === true) {
        materialArr.push(refMaterial[el].current!.value);
      }
    });
    validateState.material = materialArr.join();

    const resultValidate = validationUtils(validateState);

    let countResultValue = 0;
    Object.values(resultValidate).forEach((elem) => {
      if (typeof elem === 'string') {
        countResultValue += 1;
      }
    });
    if (countResultValue > 0) {
      setIsValidate(false);
      setErrorMessage(resultValidate);
    } else {
      setIsValidate(true);
      setIsModalActive(true);

      updateAllCards(validateState);

      refForm.formRef.current!.reset();

      updateFile('');

      setTimeout(() => {
        setErrorMessage({});
        setIsModalActive(false);
        setIsValidate(false);
      }, 5000);
    }
  };

  const changeFormPhoto = () => {
    const [fileDec] = refFile.fileRef.current!.files as FileList;
    fileState.file = fileDec;
    const objectURL = URL.createObjectURL(refFile.fileRef.current!.files![0] as Blob);
    updateFile(objectURL);
  };

  return (
    <form className="form" ref={refForm.formRef}>
      {isModalActive ? <p className="success-message">the data has been saved</p> : ''}
      <div className="form-container">
        <InputNumberDateText
          label="description"
          id="description"
          type="text"
          inputRef={refState.descriptionRef}
          isValidate={isValidate}
          errorMessage={errorMessage}
          testId="forms-description__input"
          placeholder="СЕРЕБРЯНЫЕ СЕРЬГИ С ЯНТАРЁМ"
        />
        <InputNumberDateText
          label="date of delivery"
          id="delivery"
          type="date"
          inputRef={refState.deliveryRef}
          isValidate={isValidate}
          errorMessage={errorMessage}
          testId="forms-delivery__input"
        />
      </div>
      <div className="form-container">
        <InputNumberDateText
          label="price"
          id="price"
          type="number"
          inputRef={refState.priceRef}
          placeholder="722.40"
          isValidate={isValidate}
          errorMessage={errorMessage}
        />
        <div className="item-form-container">
          <p className="form-label">Discount</p>
          <div className="form-discount">
            <InputRadio
              nameInput="discount"
              inputRef={refDiscount.discount0Ref}
              id="0"
              type="radio"
              value="0"
              label="without discount"
            />
            <InputRadio
              nameInput="discount"
              inputRef={refDiscount.discount5Ref}
              id="5"
              type="radio"
              value="5"
              label="5%"
            />
            <InputRadio
              nameInput="discount"
              inputRef={refDiscount.discount10Ref}
              id="10"
              type="radio"
              value="10"
              label="10%"
            />
            <InputRadio
              nameInput="discount"
              inputRef={refDiscount.discount15Ref}
              id="15"
              type="radio"
              value="15"
              label="15%"
            />
          </div>
          {isValidate === false && typeof errorMessage.discount === 'string' ? (
            <p className="invalid-message">{errorMessage.discount}</p>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className="form-container">
        <div className="item-form-container">
          <label htmlFor="person" className="form-label">
            FOR WHOM
          </label>
          <select id="person" ref={refSelect.personRef}>
            <option value="">Choose for whom</option>
            <option value="women">For women</option>
            <option value="men">For men</option>
            <option value="unisex">Unisex</option>
            <option value="children">For children</option>
          </select>
          {isValidate === false && typeof errorMessage.person === 'string' ? (
            <p className="invalid-message">{errorMessage.person}</p>
          ) : (
            ''
          )}
        </div>
        <InputFile
          label="Image"
          id="file"
          type="file"
          isValidate={isValidate}
          inputRef={refFile.fileRef}
          errorMessage={errorMessage}
          onChangeFunc={changeFormPhoto}
        />
      </div>
      <div className="item-form-container-last">
        <p className="form-label"> TYPE OF METAL</p>
        <div className="form-discount">
          <InputCheckbox
            inputRef={refMaterial.pinkGoldRef}
            inputValue="Pink gold"
            val="Pink gold"
          />
          <InputCheckbox
            inputRef={refMaterial.whiteGoldRef}
            inputValue="White gold"
            val="White gold"
          />
          <InputCheckbox
            inputRef={refMaterial.combinedGoldRef}
            inputValue="Combined Gold"
            val="Combined Gold"
          />
          <InputCheckbox
            inputRef={refMaterial.yellowGoldRef}
            inputValue="Yellow Gold"
            val="Yellow Gold"
          />
          <InputCheckbox inputRef={refMaterial.silverRef} inputValue="Silver" val="Silver" />
          <InputCheckbox
            inputRef={refMaterial.combinedSilverRef}
            inputValue="Combined Silver"
            val="Combined Silver"
          />
          <InputCheckbox
            inputRef={refMaterial.silverGildedRef}
            inputValue="Silver Gilded"
            val="Silver Gilded"
          />
        </div>
        {isValidate === false && typeof errorMessage.material === 'string' ? (
          <p className="invalid-message">{errorMessage.material}</p>
        ) : (
          ''
        )}
      </div>
      <div className="form-button">
        <button type="button" onClick={handleSubmitClick} data-testid="forms-submit">
          Submit
        </button>
      </div>
    </form>
  );
}
