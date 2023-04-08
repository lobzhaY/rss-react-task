import React from 'react';
import { CardItemPropsType } from '../../interface/componentsInterface/cardItemInterface';

export default function CardItem({ imageUrl, description, likes }: CardItemPropsType) {
  return (
    <div className="card" data-testid="html-element">
      <div className="card__image">
        <div className="card__info">
          <div className="info-container">
            <span className="material-symbols-outlined card-icons">favorite</span>
          </div>
          <div className="info-container">
            <p className="card-icons-likes">{likes}</p>
          </div>
        </div>
        <div className="image__container">
          <img src={imageUrl} alt="Product img" />
        </div>
        <div className="image__info">
          <div className="info__description">{description}</div>
        </div>
      </div>
      <div className="card__button">
        <button type="button" className="button__buy">
          More details
        </button>
      </div>
    </div>
  );
}
