import React from 'react';

/* type FormCardItemPropsType = {
  imageUrl: string;
  price: string;
  sale: string;
  description: string;
};
 */
// eslint-disable-next-line react/prefer-stateless-function
class FormCardItem extends React.Component {
  render() {
    return (
      <div className="card-form">
        <div className="card-form__left">
          <div className="left-img-container">
            <img
              src="https://avatars.mds.yandex.net/i?id=cd9612d10ab07c7510d5df85597cb5ddd67ff210-9220416-images-thumbs&n=13"
              alt=""
            />
          </div>
          <h3>СЕРЕБРЯНЫЕ СЕРЬГИ C ПОДВЕСКОЙ С БРИЛЛИАНТОМ</h3>
        </div>
        <div className="card-form__right">
          <div className="form-checked__input">
            <span className="card-form__span">date of delivery</span> delivery
          </div>
          <div className="form-checked__input">
            <span className="card-form__span">Product cost</span>price
          </div>
          <div className="form-checked__input">
            <span className="card-form__span">Amount of discount</span>discount
          </div>
          <div className="form-checked__input">
            <span className="card-form__span">for whom</span>person
          </div>
          <div className="form-checked__input">
            <span className="card-form__span">production material</span>material
          </div>
        </div>
      </div>
    );
  }
}

export default FormCardItem;
