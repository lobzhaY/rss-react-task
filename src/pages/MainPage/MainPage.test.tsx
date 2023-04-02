import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';
import MainPage from './MainPage';

describe('Check if the container for cards is empty', () => {
  it('the card is present', () => {
    render(<MainPage />);
    expect(screen.getByTestId('not-empty')).not.toBeEmptyDOMElement();
  });
});
