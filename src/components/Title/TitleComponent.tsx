import React from 'react';

type titleType = {
  name: string;
};

class TitleComponent extends React.Component<titleType> {
  constructor(props: titleType) {
    super(props);
  }
  render() {
    return (
      <div className="title-container">
        <h1>{this.props.name}</h1>
        <hr />
      </div>
    );
  }
}

export default TitleComponent;
