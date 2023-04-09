import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { ISearch } from '../../interface/componentsInterface/searchInterface';

export default function SearchComponent({ handleChange }: ISearch) {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '');

  const searchInputRef = useRef<string>(searchValue);

  function saveValue(event: ChangeEvent<HTMLInputElement>): void {
    const target = event.target as HTMLInputElement;
    setSearchValue(target.value);
  }

  useEffect(() => {
    searchInputRef.current = searchValue;
  }, [searchValue]);

  useEffect(() => {
    return () => {
      localStorage.setItem('searchValue', searchInputRef.current || '');
    };
  }, []);

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
