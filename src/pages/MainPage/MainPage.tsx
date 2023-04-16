import React, { useEffect, useState } from 'react';

import CardItem from '../../components/CardItem/CardItem';
import TitleComponent from '../../components/Title/TitleComponent';
import SearchComponent from '../../components/Search/SearchComponent';
import Loader from '../../components/Loader/Loader';
import PopUp from '../../components/PopUp/PopUpComponent';
import MainCardItem from '../../components/MainCardItem/MainCardItem';

import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import { fetchAllCards } from '../../store/reducers/ActionCreators';

import { ICardStateMain } from '../../interface/componentsInterface/cardItemInterface';

export default function MainPage() {
  const { searchValue, cardsState, isPending, isError, errorState, isNotFound } = useAppSelector(
    (state) => state.allCardsReducer
  );
  const dispatch = useAppDispatch();

  const [isModalActive, setIsModalActive] = useState(false);
  const [idCard, setIdCard] = useState('');

  useEffect(() => {
    dispatch(fetchAllCards(searchValue));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <TitleComponent name="Main page" />
      <SearchComponent />
      <div className="margin-container">
        {isModalActive && (
          <PopUp active={isModalActive} setActive={setIsModalActive}>
            <MainCardItem idElem={idCard} />
          </PopUp>
        )}
        <div className="height-container">
          {isError &&
            errorState.map((er, index) => (
              <div className="not-found" key={`${index.toString()}Q`}>
                {er}
              </div>
            ))}
          {isNotFound && <div className="not-found">Not found</div>}
          {isPending && <Loader />}
          <div className="container-cards" data-testid="not-empty">
            {cardsState.map((elem: ICardStateMain) => (
              <CardItem
                key={elem.id}
                imageUrl={elem.urls.thumb}
                description={elem.alt_description}
                likes={elem.likes}
                setActive={setIsModalActive}
                setIdCard={setIdCard}
                elemId={elem.id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
