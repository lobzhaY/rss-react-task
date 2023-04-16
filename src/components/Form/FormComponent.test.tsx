import { describe, expect, test } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';

import React from 'react';
import FormsPage from '../../pages/Forms/Forms';
import { renderWithProviders } from '../../utils/testUtils';
import PopUp from '../PopUp/PopUpComponent';
import { MESSAGE_CARD_CREATE_SUCCESS } from '../../constants/constants';

describe('Forms tests', () => {
  const active = true;
  test('test description input', () => {
    renderWithProviders(<FormsPage />);
    const nameInput = screen.getByTestId('forms-description__input') as HTMLInputElement;
    fireEvent.change(nameInput, { target: { value: 'xxxxx xxxxx' } });
    expect(nameInput.value).toBe('xxxxx xxxxx');
  });

  test('test date', () => {
    renderWithProviders(<FormsPage />);
    const dateInput = screen.getByTestId('forms-delivery__input') as HTMLInputElement;
    fireEvent.change(dateInput, { target: { value: '2023-04-25' } });
    expect(dateInput.value).toBe('2023-04-25');
  });
  test('test message', () => {
    renderWithProviders(
      <PopUp active setActive={() => !active}>
        <div className="error-container">{MESSAGE_CARD_CREATE_SUCCESS}</div>
      </PopUp>
    );
    expect(screen.getByText('the data has been saved')).toBeInTheDocument();
  });
});
