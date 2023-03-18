import CardItem from '../../components/CardItem/CardItem';
import React from 'react';
import earrings, { earringsType } from '../../db/db';

class MainPage extends React.Component {
  render() {
    return (
      <div className="margin-container">
        <div className="container-cards">
          {earrings.map((elem: earringsType) => <CardItem imageUrl={elem.imageUrl} price={elem.price} sale={elem['price-sale']} description={elem.name} />)}
        </div>
      </div>
    );
  }
}

export default MainPage;
