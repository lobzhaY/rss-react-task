import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';
import App from './App';

describe('Whether the element is present on the page', () => {
  it('the card is present', () => {
    render(<App />);
    expect(screen.getByTestId('app-component')).toBeInTheDocument();
  });
});
