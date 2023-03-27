import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';
import CardItem from './CardItem';

describe('Whether the element is present on the page', () => {
  it('the card is present', () => {
    render(<CardItem imageUrl="string" price="222" sale="111" description="aaaaa" />);
    expect(screen.getByTestId('html-element')).toBeInTheDocument();
  });
});
