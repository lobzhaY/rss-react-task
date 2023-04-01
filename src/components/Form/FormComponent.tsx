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
        <div className="item-form-container">
          <label className="form-label" htmlFor="description">
            description
          </label>
          <input
            data-testid="forms-description__input"
            ref={refState.descriptionRef}
            placeholder="СЕРЕБРЯНЫЕ СЕРЬГИ С ЯНТАРЁМ"
            type="text"
            id="description"
            name="description"
          />
          {isValidate === false && typeof errorMessage.description === 'string' ? (
            <p className="invalid-message">{errorMessage.description}</p>
          ) : (
            ''
          )}
        </div>
        <div className="item-form-container">
          <label className="form-label" htmlFor="date">
            date of delivery
          </label>
          <input
            data-testid="forms-delivery__input"
            type="date"
            ref={refState.deliveryRef}
            id="date"
          />
          {isValidate === false && typeof errorMessage.delivery === 'string' ? (
            <p className="invalid-message">{errorMessage.delivery}</p>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className="form-container">
        <div className="item-form-container">
          <label className="form-label" htmlFor="price">
            price
          </label>
          <input type="number" ref={refState.priceRef} placeholder="722.40" id="price" />
          {isValidate === false && typeof errorMessage.price === 'string' ? (
            <p className="invalid-message">{errorMessage.price}</p>
          ) : (
            ''
          )}
        </div>
        <div className="item-form-container">
          <p className="form-label">Discount</p>
          <div className="form-discount">
            <div>
              <input name="discount" ref={refDiscount.discount0Ref} id="0" type="radio" value="0" />
              <label htmlFor="0" className="form-label">
                without discount
              </label>
            </div>
            <div>
              <input name="discount" ref={refDiscount.discount5Ref} id="5" type="radio" value="5" />
              <label htmlFor="5" className="form-label">
                5%
              </label>
            </div>
            <div>
              <input
                name="discount"
                ref={refDiscount.discount10Ref}
                id="10"
                type="radio"
                value="10"
              />
              <label htmlFor="10" className="form-label">
                10%
              </label>
            </div>
            <div>
              <input
                name="discount"
                ref={refDiscount.discount15Ref}
                id="15"
                type="radio"
                value="15"
              />
              <label htmlFor="15" className="form-label">
                15%
              </label>
            </div>
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
        <div className="item-form-container">
          <label className="form-label label-file" htmlFor="file">
            Image
            <span className="material-symbols-outlined label-file-icon">drive_folder_upload</span>
          </label>
          <input
            type="file"
            accept="image/png, image/gif, image/jpeg, image/jpg"
            id="file"
            style={{ display: 'none' }}
            ref={refFile.fileRef}
            onChange={changeFormPhoto}
          />
          {isValidate === false && typeof errorMessage.file === 'string' ? (
            <p className="invalid-message">{errorMessage.file}</p>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className="item-form-container-last">
        <p className="form-label"> TYPE OF METAL</p>
        <div className="form-discount">
          <label className="form-label">
            <input type="checkbox" ref={refMaterial.pinkGoldRef} value="Pink gold" /> Pink gold
          </label>
          <label className="form-label">
            <input type="checkbox" ref={refMaterial.whiteGoldRef} value="White gold" /> White gold
          </label>
          <label className="form-label">
            <input type="checkbox" ref={refMaterial.combinedGoldRef} value="Combined Gold" />
            Combined Gold
          </label>
          <label className="form-label">
            <input type="checkbox" ref={refMaterial.yellowGoldRef} value="Yellow Gold" />
            Yellow Gold
          </label>
          <label className="form-label">
            <input type="checkbox" ref={refMaterial.silverRef} value="Silver" /> Silver
          </label>
          <label className="form-label">
            <input type="checkbox" ref={refMaterial.combinedSilverRef} value="Combined Silver" />
            Combined Silver
          </label>
          <label className="form-label">
            <input type="checkbox" ref={refMaterial.silverGildedRef} value="Silver Gilded" />
            Silver Gilded
          </label>
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
