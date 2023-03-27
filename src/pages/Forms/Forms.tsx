import React from 'react';
import FormComponent from '../../components/Form/FormComponent';
import FormCardItem from '../../components/FromCardItem/FormCardItem';
import TitleComponent from '../../components/Title/TitleComponent';
import { IValidationState } from '../../interface/formInterface';

// eslint-disable-next-line react/prefer-stateless-function
class FormsPage extends React.Component<
  Record<string, unknown>,
  { file: string; cards: IValidationState[] }
> {
  allCards: IValidationState[] = [];

  constructor(props = {}) {
    super(props);
    this.state = {
      file: '',
      cards: [],
    };
    this.updateAllCards = this.updateAllCards.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  updateFile(fileUrl: string) {
    this.setState((previousState) => ({
      ...previousState,
      file: fileUrl,
    }));
  }

  updateAllCards(card: IValidationState) {
    this.allCards.push(card);
    this.setState((previousState) => ({
      ...previousState,
      cards: this.allCards,
    }));
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
                    file !== ''
                      ? file
                      : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
                  }
                  alt="Loading images"
                />
              </div>
              <div className="right-form">
                <FormComponent updateAllCards={this.updateAllCards} updateFile={this.updateFile} />
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
              <div className="list-container-form">
                {cards.map((elem: IValidationState, index) => (
                  <FormCardItem
                    key={index.toString()}
                    description={elem.description}
                    delivery={elem.delivery}
                    price={elem.price}
                    discount={elem.discount}
                    person={elem.person}
                    file={elem.file}
                    material={elem.material}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default FormsPage;
