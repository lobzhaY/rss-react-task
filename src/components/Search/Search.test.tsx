import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import React from 'react';
import SearchComponent from './SearchComponent';

describe('Search input tests', () => {
  test('render SearchComponent component', () => {
    render(<SearchComponent />);
    const searchInput = screen.getByPlaceholderText('Search...') as HTMLInputElement;
    expect(searchInput.placeholder).toBe('Search...');
  });
  test('SearchComponent check', () => {
    render(<SearchComponent />);
    const searchInput = screen.getByTestId('search-input-data') as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: '12345' } });
    expect(searchInput.value).toBe('12345');
  });
  test('Save SearchComponent in localStorage', () => {
    const { unmount } = render(<SearchComponent />);
    const searchInput = screen.getByTestId('search-input') as HTMLInputElement;
    fireEvent.keyDown(searchInput, { target: { value: '23' } });
    unmount();
    expect(window.localStorage.searchValue).toBeDefined;
  });
});
