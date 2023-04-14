import React, { ChangeEvent } from 'react';

import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import { setSearch } from '../../store/reducers/AllCardsSlice';

import { ISearch } from '../../interface/componentsInterface/searchInterface';

export default function SearchComponent({ handleChange }: ISearch) {
  const searchValue = useAppSelector((state) => state.allCardsReducer.searchValue);
  const dispatch = useAppDispatch();

  function saveValue(event: ChangeEvent<HTMLInputElement>): void {
    const target = event.target as HTMLInputElement;
    dispatch(setSearch(target.value));
  }

  return (
    <div className="search-header">
      <input
        type="text"
        placeholder={searchValue === '' ? 'Search...' : ''}
        value={searchValue === '' ? '' : searchValue}
        onChange={saveValue}
        data-testid="search-input-data"
        onKeyDown={handleChange}
      />
      <span className="material-symbols-outlined">search</span>
    </div>
  );
}
