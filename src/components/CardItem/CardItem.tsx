import React from 'react';

class CardItem extends React.Component {
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
            <img
              src="https://slavia.by/upload/resize_cache/iblock/5e4/700_700_2/5e44a8a98cbe0259c774f6d013246767.jpg"
              alt="Product img"
            />
          </div>
          <div className="image__info">
            <div className="info__price">1 200.78 руб.</div>
            <div className="info__price-sale">1 547.00 руб.</div>
            <div className="info__description">
              Серьги из белого золота с бриллиантами 3D0081.14K.W
            </div>
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
