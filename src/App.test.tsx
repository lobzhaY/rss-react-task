import { describe } from 'vitest';
import { act, screen } from '@testing-library/react';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { renderWithProviders } from './utils/testUtils';

describe('Whether the element is present on the page', () => {
  test('the card is present', async () => {
    await act(async () =>
      renderWithProviders(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      )
    );
    expect(screen.getByTestId('app-component')).toBeInTheDocument();
  });
});
