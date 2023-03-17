import CardItem from '../../components/CardItem/CardItem';
import React from 'react';

class MainPage extends React.Component {
  render() {
    return (
      <div className="margin-container">
        <div className="container-cards">
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </div>
    );
  }
}

export default MainPage;
