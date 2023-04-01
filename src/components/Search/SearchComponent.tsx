import React, { ChangeEvent } from 'react';

export default function SearchComponent() {
  const [searchValue, setSearchValue] = React.useState(localStorage.getItem('searchValue') || '');

  function saveValue(event: ChangeEvent<HTMLInputElement>): void {
    const target = event.target as HTMLInputElement;
    setSearchValue(target.value);
  }

  React.useEffect(() => {
    const savedValue = localStorage.getItem('searchValue');
    if (savedValue?.trim()) {
      setSearchValue(savedValue);
    }
  }, []);

  React.useEffect(() => {
    return () => {
      localStorage.setItem('searchValue', searchValue);
    };
  }, [searchValue]);

  return (
    <div className="search-header">
      <input
        type="text"
        placeholder={searchValue === '' ? 'Search...' : ''}
        value={searchValue === '' ? '' : searchValue}
        onChange={saveValue}
      />
      <span className="material-symbols-outlined">search</span>
    </div>
  );
}
