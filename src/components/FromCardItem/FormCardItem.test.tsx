import { describe, it } from 'vitest';
import { render } from '@testing-library/react';

import React from 'react';
import FormCardItem from './FormCardItem';

describe('Check if the container for cards is empty', () => {
  it('the card is present', () => {
    render(
      <FormCardItem
        description="Some description"
        delivery="2023-11-11"
        price="11.10"
        discount="5"
        person="men"
        file="D:\CV\Photo\IMG_4407"
        material="silver"
      />
    );
    expect(document.querySelector('.card-form')).not.toBeEmptyDOMElement();
  });
});
