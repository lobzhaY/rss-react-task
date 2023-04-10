import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AUTHORIZATION, URL_API_GET_ONE } from '../../constants/constants';
import { IMainCardItem } from '../../interface/componentsInterface/cardItemInterface';
import Loader from '../Loader/Loader';

export default function MainCardItem({ idElem }: { idElem: string }) {
  const [cardState, setCardState] = useState<IMainCardItem | null>(null);
  const [isError, setIsError] = useState(false);
  const [errorState, setErrorState] = useState<string[]>([]);
  const [isPending, setIsPending] = useState(true);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const getResponse = async () => {
      setIsPending(true);
      setIsError(false);
      setIsNotFound(false);
      setCardState(null);
      try {
        const response = await axios.get(`${URL_API_GET_ONE}/${idElem}?client_id=${AUTHORIZATION}`);
        const { data } = response;
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
    getResponse();
  }, [idElem]);
  return (
    <div className="main-card-item-container">
      {isError && (
        <div className="error-container">
          {errorState.map((er, index) => (
            <div className="not-found" key={`${index.toString()}Q`}>
              {er}
            </div>
          ))}
        </div>
      )}
      {isNotFound && <div className="not-found">Not found</div>}
      {isPending && <Loader />}
      {cardState && (
        <div>
          <p className="modal-description-title">
            {cardState?.description === null ? cardState.alt_description : cardState?.description}
          </p>
          <div className="card-wrapper">
            <div className="photo-wrapper">
              <div className="card-img-container">
                <img src={cardState.urls.regular} alt="" />
              </div>
            </div>
            <div className="card-info">
              <div className="info-row">
                <div className="img-info-item">
                  <span className="item-description">created at</span>
                  <p className="item-definition">{cardState?.created_at}</p>
                </div>
                <div className="img-info-item">
                  <span className="item-description">location</span>
                  <p className="item-definition">{cardState?.location.name}</p>
                </div>
              </div>
              <div className="info-row">
                <div className="img-info-item">
                  <span className="item-description">downloads:</span>
                  <p className="item-definition">{cardState?.downloads}</p>
                </div>
                <div className="img-info-item">
                  <span className="item-description">likes:</span>
                  <p className="item-definition">{cardState?.likes}</p>
                </div>
                <div className="img-info-item">
                  <span className="item-description">views:</span>
                  <p className="item-definition">{cardState?.views}</p>
                </div>
              </div>
              <div className="info-row-last">
                <div className="img-info-item">
                  <span className="item-description">width:</span>
                  <p className="item-definition">{cardState?.width}</p>
                </div>
                <div className="img-info-item">
                  <span className="item-description">height:</span>
                  <p className="item-definition">{cardState?.height}</p>
                </div>
              </div>
            </div>
          </div>
          <p className="modal-description-title">
            <span>photographer </span>
            {cardState?.user.name}
          </p>
          <div className="card-wrapper">
            <div className="photo-wrapper">
              <div className="user-photo">
                <img src={cardState?.user.profile_image.large} alt="Photos of photographer" />
              </div>
            </div>
            <div className="card-info">
              <div className="info-all">
                <p className="item-definition">{cardState?.user.bio}</p>
              </div>
              <div className="info-row">
                <div className="img-info-item">
                  <span className="item-description">total likes:</span>
                  <p className="item-definition">{cardState?.user.total_likes}</p>
                </div>
                <div className="img-info-item">
                  <span className="item-description">total photos:</span>
                  <p className="item-definition">{cardState?.user.total_photos}</p>
                </div>
                <div className="img-info-item">
                  <span className="item-description">total collections:</span>
                  <p className="item-definition">{cardState?.user.total_collections}</p>
                </div>
              </div>
              <div className="info-all-text">
                <span className="item-description">created at</span>
                <Link to={`${cardState?.user.portfolio_url}`}>
                  <span className="item-definition-icon material-symbols-outlined">
                    photo_library
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
