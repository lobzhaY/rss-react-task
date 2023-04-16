import { describe } from 'vitest';
import { screen } from '@testing-library/react';

import React from 'react';
import MainPage from './MainPage';
import { renderWithProviders } from '../../utils/testUtils';

describe('Check if the container for cards is empty', () => {
  test('the card is present', () => {
    renderWithProviders(<MainPage />);
    expect(screen.getByTestId('not-empty')).toBeEmptyDOMElement();
  });
});
