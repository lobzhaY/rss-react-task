import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import { fetchCard } from '../../store/reducers/ActionCreators';

import Loader from '../Loader/Loader';

export default function MainCardItem({ idElem }: { idElem: string }) {
  const { isPending, card, isError, errorState } = useAppSelector((state) => state.cardReducer);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCard(idElem));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      {card === null && isError === false && <div className="not-found">Not found</div>}
      {isPending && <Loader />}
      {card && (
        <div>
          <p className="modal-description-title">
            {card?.description === null ? card.alt_description : card?.description}
          </p>
          <div className="card-wrapper">
            <div className="photo-wrapper">
              <div className="card-img-container">
                <img src={card.urls.regular} alt="" />
              </div>
            </div>
            <div className="card-info">
              <div className="info-row">
                <div className="img-info-item">
                  <span className="item-description">created at</span>
                  <p className="item-definition">{card?.created_at}</p>
                </div>
                <div className="img-info-item">
                  <span className="item-description">location</span>
                  <p className="item-definition">{card?.location.name}</p>
                </div>
              </div>
              <div className="info-row">
                <div className="img-info-item">
                  <span className="item-description">downloads:</span>
                  <p className="item-definition">{card?.downloads}</p>
                </div>
                <div className="img-info-item">
                  <span className="item-description">likes:</span>
                  <p className="item-definition">{card?.likes}</p>
                </div>
                <div className="img-info-item">
                  <span className="item-description">views:</span>
                  <p className="item-definition">{card?.views}</p>
                </div>
              </div>
              <div className="info-row-last">
                <div className="img-info-item">
                  <span className="item-description">width:</span>
                  <p className="item-definition">{card?.width}</p>
                </div>
                <div className="img-info-item">
                  <span className="item-description">height:</span>
                  <p className="item-definition">{card?.height}</p>
                </div>
              </div>
            </div>
          </div>
          <p className="modal-description-title">
            <span>photographer </span>
            {card?.user.name}
          </p>
          <div className="card-wrapper">
            <div className="photo-wrapper">
              <div className="user-photo">
                <img src={card?.user.profile_image.large} alt="Photos of photographer" />
              </div>
            </div>
            <div className="card-info">
              <div className="info-all">
                <p className="item-definition">{card?.user.bio}</p>
              </div>
              <div className="info-row">
                <div className="img-info-item">
                  <span className="item-description">total likes:</span>
                  <p className="item-definition">{card?.user.total_likes}</p>
                </div>
                <div className="img-info-item">
                  <span className="item-description">total photos:</span>
                  <p className="item-definition">{card?.user.total_photos}</p>
                </div>
                <div className="img-info-item">
                  <span className="item-description">total collections:</span>
                  <p className="item-definition">{card?.user.total_collections}</p>
                </div>
              </div>
              <div className="info-all-text">
                <span className="item-description">created at</span>
                <Link to={`${card?.user.portfolio_url}`}>
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
