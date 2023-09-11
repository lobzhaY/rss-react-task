import React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import MainCardItem from '../components/MainCardItem/MainCardItem';
import { renderWithProviders } from '../utils/testUtils';

describe('Cards render api', () => {
  test('fetch search', async () => {
    const { findByText } = renderWithProviders(<MainPage />);
    expect(await findByText('Alt Desc')).toBeInTheDocument();
  });
  test('fetch card', async () => {
    const { findByText } = renderWithProviders(
      <BrowserRouter>
        <MainCardItem idElem={import.meta.env.VITE_TEST_ID} />
      </BrowserRouter>
    );
    expect(await findByText(23)).toBeInTheDocument();
  });
});
