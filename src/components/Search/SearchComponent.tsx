import React, { ChangeEvent } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class SearchComponent extends React.Component<Record<string, unknown>, { searchValue: string }> {
  constructor(props = {}) {
    super(props);
    this.state = {
      searchValue: '',
    };
    this.saveValue = this.saveValue.bind(this);
  }

  componentDidMount(): void {
    const saveValue = localStorage.getItem('searchValue');
    if (saveValue?.trim()) {
      this.setState({ searchValue: saveValue });
    }
  }

  componentWillUnmount(): void {
    const { searchValue } = this.state;
    localStorage.setItem('searchValue', searchValue);
  }

  saveValue(event: ChangeEvent<HTMLInputElement>): void {
    const target = event.target as HTMLInputElement;
    this.setState({
      searchValue: target.value,
    });
  }

  render() {
    const { searchValue } = this.state;
    return (
      <div className="search-header">
        <input
          type="text"
          placeholder={searchValue === '' ? 'Search...' : ''}
          value={searchValue === '' ? '' : searchValue}
          onChange={this.saveValue}
        />
        <span className="material-symbols-outlined">search</span>
      </div>
    );
  }
}

export default SearchComponent;
