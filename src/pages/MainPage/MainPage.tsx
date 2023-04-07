import React from 'react';
import CardItem from '../../components/CardItem/CardItem';
import earrings, { EarringsType } from '../../db/db';
import TitleComponent from '../../components/Title/TitleComponent';
import SearchComponent from '../../components/Search/SearchComponent';
import Loader from '../../components/Loader/Loader';

export default function MainPage() {
  return (
    <>
      <TitleComponent name="Main page" />
      <SearchComponent />
      <Loader />
      <div className="margin-container">
        <div className="container-cards" data-testid="not-empty">
          {earrings.map((elem: EarringsType) => (
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
