import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import MainPage from '../pages/MainPage/MainPage';
import MainCardItem from '../components/MainCardItem/MainCardItem';
import { TEST_ID } from '../constants/constants';

/* describe('Cards render api', () => {
  test('fetch and display description to add', async () => {
    const { findByText } = render(<MainPage />);
    expect(findByText('').toBeInTheDocument());
  });
}); */

describe('Cards render api', () => {
  test('fetch search', async () => {
    const { findByText } = render(<MainPage />);
    expect(await findByText('Alt Desc')).toBeInTheDocument();
  });
  test('fetch card', async () => {
    const { findByText } = render(<MainCardItem idElem={TEST_ID} />);
    expect(await findByText('42')).toBeInTheDocument();
  });
});
