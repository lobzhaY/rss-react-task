import React from 'react';

import { renderWithProviders } from '../../utils/testUtils';

import Loader from './Loader';

test('render loader', () => {
  const { getByTestId } = renderWithProviders(<Loader />);

  expect(getByTestId('roller')).toBeInTheDocument();
});
