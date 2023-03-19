import React from 'react';
type cardItemPropsType = {
  imageUrl: string;
  price: string;
  sale: string;
  description: string;
};
class CardItem extends React.Component<cardItemPropsType> {
  constructor(props: cardItemPropsType) {
    super(props);
  }
  render() {
    return (
      <div className="card">
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
            <img src={this.props.imageUrl} alt="Product img" />
          </div>
          <div className="image__info">
            <div className="info__price">{this.props.price} руб.</div>
            <div className="info__price-sale">{this.props.sale} руб.</div>
            <div className="info__description">{this.props.description}</div>
          </div>
        </div>
        <div className="card__button">
          <button className="button__buy">Buy</button>
        </div>
      </div>
    );
  }
}

export default CardItem;
