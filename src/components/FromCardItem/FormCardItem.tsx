import React from 'react';

import { FormCardItemPropsType } from '../../interface/componentsInterface/cardItemInterface';

export default function FormCardItem({
  description,
  delivery,
  price,
  discount,
  person,
  file,
  material,
}: FormCardItemPropsType) {
  const materialString = Array.isArray(material) ? material.join(', ') : '';
  return (
    <div className="card-form">
      <div className="card-form__left">
        <div className="left-img-container">
          <img src={file} alt="Product Images" />
        </div>
        <h3>{description}</h3>
      </div>
      <div className="card-form__right">
        <div className="form-checked__input">
          <span className="card-form__span">PUBLICATION DATE</span> {delivery}
        </div>
        <div className="form-checked__input">
          <span className="card-form__span">PRICE</span> {price}
        </div>
        <div className="form-checked__input">
          <span className="card-form__span">DISCOUNT</span> {discount}
        </div>
        <div className="form-checked__input">
          <span className="card-form__span">for whom</span> {person}
        </div>
        <div className="form-checked__input">
          <span className="card-form__span">CHARACTERISTICS</span> {materialString}
        </div>
      </div>
    </div>
  );
}
