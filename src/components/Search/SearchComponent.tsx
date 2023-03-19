import React, { ChangeEvent } from 'react';

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
    localStorage.setItem('searchValue', this.state.searchValue);
  }
  saveValue(event: ChangeEvent<HTMLInputElement>): void {
    const target = event.target as HTMLInputElement;
    this.setState({
      searchValue: target.value,
    });
  }
  render() {
    return (
      <div className="search-header">
        <input
          type="text"
          placeholder={this.state.searchValue === '' ? 'Search...' : ''}
          value={this.state.searchValue === '' ? '' : this.state.searchValue}
          onChange={this.saveValue}
        />
        <span className="material-symbols-outlined">search</span>
      </div>
    );
  }
}

export default SearchComponent;
