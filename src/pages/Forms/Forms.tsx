import React from 'react';
import FormComponent from '../../components/Form/FormComponent';
import TitleComponent from '../../components/Title/TitleComponent';

// eslint-disable-next-line react/prefer-stateless-function
class FormsPage extends React.Component<
  Record<string, unknown>,
  { file: string; cards: string[] }
> {
  constructor(props = {}) {
    super(props);
    this.state = {
      file: '',
      cards: [],
    };
  }

  render() {
    const { file, cards } = this.state;
    return (
      <>
        <div className="top-form">
          <div className="margin-container">
            <TitleComponent name="Create a card" />
            <div className="wrapper-flex">
              <div className="left-img">
                <img
                  src={
                    file
                      ? 'URL.createObjectURL(file)'
                      : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
                  }
                  alt="Loading images"
                />
              </div>
              <div className="right-form">
                <FormComponent />
              </div>
            </div>
          </div>
        </div>
        {cards.length === 0 ? (
          ''
        ) : (
          <div className="bottom-cards">
            <div className="margin-container">
              <TitleComponent name="New card" />
            </div>
          </div>
        )}
      </>
    );
  }
}

export default FormsPage;
