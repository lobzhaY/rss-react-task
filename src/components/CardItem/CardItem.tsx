import React from 'react';

type CardItemPropsType = {
  imageUrl: string;
  price: string;
  sale: string;
  description: string;
};

// eslint-disable-next-line react/prefer-stateless-function
class CardItem extends React.Component<CardItemPropsType> {
  render() {
    const { imageUrl, price, sale, description } = this.props;
    return (
      <div className="card" data-testid="html-element">
        <div className="card__image">
          <div className="card__info">
            <div className="info-container">
              <span className="material-symbols-outlined card-icons">favorite</span>
            </div>
            <div className="info-container">
              <span className="material-symbols-outlined card-icons">local_mall</span>
            </div>
          </div>
          <div className="image__container">
            <img src={imageUrl} alt="Product img" />
          </div>
          <div className="image__info">
            <div className="info__price">{price} руб.</div>
            <div className="info__price-sale">{sale} руб.</div>
            <div className="info__description">{description}</div>
          </div>
        </div>
        <div className="card__button">
          <button type="button" className="button__buy">
            Buy
          </button>
        </div>
      </div>
    );
  }
}

export default CardItem;
