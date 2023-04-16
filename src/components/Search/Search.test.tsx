import { describe, expect, test } from 'vitest';
import { fireEvent, screen, act, waitFor } from '@testing-library/react';

import React from 'react';
import MainPage from '../../pages/MainPage/MainPage';
import { renderWithProviders } from '../../utils/testUtils';

describe('Search input tests', () => {
  test('render SearchComponent', () => {
    renderWithProviders(<MainPage />);
    const searchInput = screen.getByPlaceholderText('Search...') as HTMLInputElement;
    expect(searchInput.placeholder).toBe('Search...');
  });
  test('SearchComponent check', () => {
    renderWithProviders(<MainPage />);
    const searchInput = screen.getByTestId('search-input-data') as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: '12345' } });
    expect(searchInput.value).toBe('12345');
  });
  test('handles on enter event', async () => {
    renderWithProviders(<MainPage />);
    await act(async () =>
      fireEvent.keyDown(screen.getByTestId('search-input-data') as HTMLInputElement, {
        key: 'Enter',
        code: 13,
        charCode: 13,
      })
    );
    await waitFor(() => expect(screen.getByTestId('html-element')).toBeInTheDocument());
  });
  test('handles any other key pressed', async () => {
    renderWithProviders(<MainPage />);
    fireEvent.keyDown(screen.getByTestId('search-input-data') as HTMLInputElement, {
      key: 'Esc',
      code: 27,
      charCode: 27,
    });
    await waitFor(() => expect(screen.getByTestId('html-element')).toBeInTheDocument());
  });
});
