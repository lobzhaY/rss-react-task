import React, { SyntheticEvent, useEffect, useState } from 'react';
import axios from 'axios';
import CardItem from '../../components/CardItem/CardItem';
import TitleComponent from '../../components/Title/TitleComponent';
import SearchComponent from '../../components/Search/SearchComponent';
import Loader from '../../components/Loader/Loader';
import { AUTHORIZATION, URL_API_SEARCH } from '../../constants/constants';
import { ICardStateMain } from '../../interface/componentsInterface/cardItemInterface';
import PopUp from '../../components/PopUp/PopUpComponent';
import MainCardItem from '../../components/MainCardItem/MainCardItem';

export default function MainPage() {
  const [cardState, setCardState] = useState<ICardStateMain[]>([]);
  const [isError, setIsError] = useState(false);
  const [errorState, setErrorState] = useState<string[]>([]);
  const [isPending, setIsPending] = useState(true);
  const [isNotFound, setIsNotFound] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false); // false
  const [idCard, setIdCard] = useState('');

  const getItems = async (value: string) => {
    setIsPending(true);
    setIsError(false);
    setCardState([]);
    setIsNotFound(false);
    try {
      const res = await axios.get(
        `${URL_API_SEARCH}?query=${value || 'photo'}&client_id=${AUTHORIZATION}`
      );
      const data = res.data.results;
      setCardState(data);
      if (data.length === 0) {
        setIsNotFound(true);
      } else {
        setIsNotFound(false);
      }
      return data;
    } catch (error) {
      const errors = [];
      if (axios.isAxiosError(error)) {
        errors.push(error.response?.data.errors[0]);
      }
      if (error instanceof Error) {
        errors.push(error.message);
      }
      setErrorState(errors);
      setIsError(true);
      return errors;
    } finally {
      setIsPending(false);
    }
  };

  useEffect(() => {
    const getResponse = async () => {
      const lsData = localStorage.getItem('searchValue');
      if (lsData) {
        const response = await getItems(lsData);
        setCardState(await response);
      } else {
        const response = await getItems('');
        setCardState(await response);
      }
    };
    getResponse();
  }, []);

  const handleChange = async (e: SyntheticEvent<HTMLInputElement, KeyboardEvent>) => {
    if (e.nativeEvent.key === 'Enter') {
      if (!(e.target instanceof HTMLInputElement)) return;
      const response = await getItems(e.target.value);
      setCardState(response);
    }
  };

  return (
    <>
      <TitleComponent name="Main page" />
      <SearchComponent handleChange={handleChange} />
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
            {cardState.map((elem: ICardStateMain) => (
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
