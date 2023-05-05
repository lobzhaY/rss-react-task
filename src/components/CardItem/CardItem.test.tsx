import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';
import CardItem from './CardItem';
import { TEST_ID } from '../../constants/constants';

describe('Whether the element is present on the page', () => {
  const showModal = true;
  test('the card is present', () => {
    render(
      <CardItem
        imageUrl="string"
        description="Alt description"
        likes={11}
        setActive={() => !showModal}
        setIdCard={() => TEST_ID}
        elemId={TEST_ID}
      />
    );
    expect(screen.getByTestId('html-element')).toBeInTheDocument();
  });
});
