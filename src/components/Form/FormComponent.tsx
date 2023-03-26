import React from 'react';
import { IErrorState, IValidationState } from '../../interface/formInterface';
import validationUtils from '../../utils/validationUtils';

interface IRef {
  [key: string]: React.RefObject<HTMLInputElement>;
}
interface IForm {
  formRef: React.RefObject<HTMLFormElement>;
}
interface ISelect {
  [key: string]: React.RefObject<HTMLSelectElement>;
}

interface IDiscount {
  [key: string]: React.RefObject<HTMLInputElement>;
}

interface IMaterial {
  [key: string]: React.RefObject<HTMLInputElement>;
}

interface IFile {
  [key: string]: React.RefObject<HTMLInputElement>;
}

interface IFileState {
  [key: string]: File | null;
}

// eslint-disable-next-line react/prefer-stateless-function
class FormComponent extends React.Component<
  { updateAllCards: (card: IValidationState) => void; updateFile: (fileUrl: string) => void },
  {
    isModalActive: boolean;
    isValidate: boolean;
    errorMessage: IErrorState;
  }
> {
  fileState: IFileState = {
    file: null,
  };

  refState: IRef = {
    descriptionRef: React.createRef(),
    deliveryRef: React.createRef(),
    priceRef: React.createRef(),
  };

  refSelect: ISelect = {
    personRef: React.createRef(),
  };

  refFile: IFile = {
    fileRef: React.createRef(),
  };

  refDiscount: IDiscount = {
    discount0Ref: React.createRef(),
    discount5Ref: React.createRef(),
    discount10Ref: React.createRef(),
    discount15Ref: React.createRef(),
  };

  refMaterial: IMaterial = {
    pinkGoldRef: React.createRef(),
    whiteGoldRef: React.createRef(),
    combinedGoldRef: React.createRef(),
    yellowGoldRef: React.createRef(),
    silverRef: React.createRef(),
    combinedSilverRef: React.createRef(),
    silverGildedRef: React.createRef(),
  };

  refForm: IForm = {
    formRef: React.createRef(),
  };

  constructor(props: { updateAllCards: () => void; updateFile: () => void }) {
    super(props);
    this.state = {
      // eslint-disable-next-line
      isModalActive: false,
      isValidate: false,
      errorMessage: {},
    };

    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.changeFormPhoto = this.changeFormPhoto.bind(this);
  }

  handleSubmitClick = () => {
    const { updateAllCards } = this.props;

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
    const refStateKeys = Object.keys(this.refState);
    refStateKeys.forEach((elem, index) => {
      if (elem.slice(0, -3) === validateStateKeys[index]) {
        validateState[validateStateKeys[index]] = this.refState[refStateKeys[index]].current!.value;
      }
    });

    // eslint-disable-next-line
    this.fileState.file = this.refFile.fileRef.current!.files![0];

    const objectURL = URL.createObjectURL(this.refFile.fileRef.current!.files![0] as Blob);
    validateState.file = objectURL;

    validateState.person = this.refSelect.personRef.current!.value;

    const validateDiscountKeys = Object.keys(this.refDiscount);
    validateDiscountKeys.forEach((el) => {
      if (this.refDiscount[el].current!.checked === true)
        validateState.discount = this.refDiscount[el].current!.value;
    });

    const validateMaterialKeys = Object.keys(this.refMaterial);
    const materialArr: string[] = [];
    validateMaterialKeys.forEach((el) => {
      if (this.refMaterial[el].current!.checked === true) {
        materialArr.push(this.refMaterial[el].current!.value);
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
      this.setState((prevVal) => ({
        ...prevVal,
        isValidate: false,
        errorMessage: resultValidate,
      }));
    } else {
      this.setState((prevVal) => ({
        ...prevVal,
        isValidate: true,
        isModalActive: true,
      }));

      updateAllCards(validateState);

      this.refForm.formRef.current!.reset();

      setTimeout(() => {
        this.setState({
          errorMessage: {},
          isValidate: false,
          isModalActive: false,
        });
      }, 5000);
    }
  };

  changeFormPhoto() {
    // eslint-disable-next-line
    this.fileState.file = this.refFile.fileRef.current!.files![0];

    const objectURL = URL.createObjectURL(this.refFile.fileRef.current!.files![0] as Blob);
    // eslint-disable-next-line
    this.props.updateFile(objectURL);
  }

  render() {
    const { isModalActive, isValidate, errorMessage } = this.state;
    return (
      <form className="form" ref={this.refForm.formRef}>
        {isModalActive ? <p className="success-message">the data has been saved</p> : ''}
        <div className="form-container">
          <div className="item-form-container">
            <label className="form-label" htmlFor="description">
              description
            </label>
            <input
              ref={this.refState.descriptionRef}
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
            <input type="date" ref={this.refState.deliveryRef} id="date" />
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
            <input type="number" ref={this.refState.priceRef} placeholder="722.40" id="price" />
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
                <input
                  name="discount"
                  ref={this.refDiscount.discount0Ref}
                  id="0"
                  type="radio"
                  value="0"
                />
                <label htmlFor="0" className="form-label">
                  without discount
                </label>
              </div>
              <div>
                <input
                  name="discount"
                  ref={this.refDiscount.discount5Ref}
                  id="5"
                  type="radio"
                  value="5"
                />
                <label htmlFor="5" className="form-label">
                  5%
                </label>
              </div>
              <div>
                <input
                  name="discount"
                  ref={this.refDiscount.discount10Ref}
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
                  ref={this.refDiscount.discount15Ref}
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
            <select id="person" ref={this.refSelect.personRef}>
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
              ref={this.refFile.fileRef}
              onChange={this.changeFormPhoto}
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
              <input type="checkbox" ref={this.refMaterial.pinkGoldRef} value="Pink gold" /> Pink
              gold
            </label>
            <label className="form-label">
              <input type="checkbox" ref={this.refMaterial.whiteGoldRef} value="White gold" /> White
              gold
            </label>
            <label className="form-label">
              <input type="checkbox" ref={this.refMaterial.combinedGoldRef} value="Combined Gold" />
              Combined Gold
            </label>
            <label className="form-label">
              <input type="checkbox" ref={this.refMaterial.yellowGoldRef} value="Yellow Gold" />
              Yellow Gold
            </label>
            <label className="form-label">
              <input type="checkbox" ref={this.refMaterial.silverRef} value="Silver" /> Silver
            </label>
            <label className="form-label">
              <input
                type="checkbox"
                ref={this.refMaterial.combinedSilverRef}
                value="Combined Silver"
              />
              Combined Silver
            </label>
            <label className="form-label">
              <input type="checkbox" ref={this.refMaterial.silverGildedRef} value="Silver Gilded" />
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
          <button type="button" onClick={this.handleSubmitClick}>
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default FormComponent;
