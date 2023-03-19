import CardItem from '../../components/CardItem/CardItem';
import React from 'react';
import earrings, { earringsType } from '../../db/db';
import TitleComponent from '../../components/Title/TitleComponent';
import SearchComponent from '../../components/Search/SearchComponent';

class MainPage extends React.Component {
  render() {
    return (
      <>
        <TitleComponent name="Main page" />
        <SearchComponent />
        <div className="margin-container">
          <div className="container-cards">
            {earrings.map((elem: earringsType) => (
              <CardItem
                key={elem.id}
                imageUrl={elem.imageUrl}
                price={elem.price}
                sale={elem['price-sale']}
                description={elem.name}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default MainPage;
