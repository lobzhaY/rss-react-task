import React from 'react';

import FormCardItem from '../../components/FromCardItem/FormCardItem';
import TitleComponent from '../../components/Title/TitleComponent';
import FormComponent from '../../components/Form/FormComponent';

import { ICardState } from '../../interface/formInterface';
import { useAppSelector } from '../../store/hooks/redux';

export default function FormsPage() {
  const allCards: ICardState[] = React.useMemo(() => [], []);

  const [file, setFile] = React.useState('');
  const [cards, setCards] = React.useState<ICardState[]>([]);
  const cardList = useAppSelector((state) => state.formReducer.forms);

  const updateFile = React.useCallback((fileUrl: string) => {
    setFile(fileUrl);
  }, []);

  const updateAllCards = React.useCallback(
    (card: ICardState) => {
      allCards.push(card);
      setCards(allCards);
    },
    [allCards]
  );

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
              <FormComponent updateAllCards={updateAllCards} updateFile={updateFile} />
            </div>
          </div>
        </div>
      </div>
      {cardList.length === 0 ? (
        ''
      ) : (
        <div className="bottom-cards">
          <div className="margin-container">
            <TitleComponent name="New card" />
            <div className="list-container-form">
              {cardList.map((elem: ICardState, index) => (
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
