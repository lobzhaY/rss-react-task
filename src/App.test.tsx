import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('Whether the element is present on the page', () => {
  it('the card is present', () => {
    render(<App />, { wrapper: BrowserRouter });
    expect(screen.getByTestId('app-component')).toBeInTheDocument();
  });
});
