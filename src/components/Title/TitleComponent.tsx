import React from 'react';

type TitleType = {
  name: string;
};

// eslint-disable-next-line react/prefer-stateless-function
class TitleComponent extends React.Component<TitleType> {
  render() {
    const { name } = this.props;
    return (
      <div className="title-container">
        <h1>{name}</h1>
        <hr />
      </div>
    );
  }
}

export default TitleComponent;
