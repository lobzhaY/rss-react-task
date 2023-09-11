import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';
import CardItem from './CardItem';

describe('Whether the element is present on the page', () => {
  const showModal = true;
  test('the card is present', () => {
    render(
      <CardItem
        imageUrl="string"
        description="Alt description"
        likes={11}
        setActive={() => !showModal}
        setIdCard={() => import.meta.env.VITE_TEST_ID}
        elemId={import.meta.env.VITE_TEST_ID}
      />
    );
    expect(screen.getByTestId('html-element')).toBeInTheDocument();
  });
});
