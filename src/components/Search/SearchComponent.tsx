import React, { ChangeEvent, SyntheticEvent, useEffect, useRef, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import { setSearch } from '../../store/reducers/AllCardsSlice';
import { fetchAllCards } from '../../store/reducers/ActionCreators';

export default function SearchComponent() {
  const searchValue = useAppSelector((state) => state.allCardsReducer.searchValue);
  const dispatch = useAppDispatch();

  const [valueSearch, setValueSearch] = useState(searchValue || '');
  const valueSearchRef = useRef('');
  valueSearchRef.current = valueSearch;

  useEffect(
    () => () => {
      dispatch(setSearch(valueSearchRef.current));
    },
    [dispatch]
  );

  function saveValue(event: ChangeEvent<HTMLInputElement>): void {
    const target = event.target as HTMLInputElement;
    setValueSearch(target.value);
  }

  const handleChange = async (e: SyntheticEvent<HTMLInputElement, KeyboardEvent>) => {
    if (e.nativeEvent.key === 'Enter') {
      if (!(e.target instanceof HTMLInputElement)) return;
      dispatch(fetchAllCards(searchValue));
    }
  };

  return (
    <div className="search-header">
      <input
        type="text"
        placeholder={valueSearch === '' ? 'Search...' : ''}
        value={valueSearch === '' ? '' : valueSearch}
        onChange={saveValue}
        data-testid="search-input-data"
        onKeyDown={handleChange}
      />
      <span className="material-symbols-outlined">search</span>
    </div>
  );
}
