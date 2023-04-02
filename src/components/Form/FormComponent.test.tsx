import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import React from 'react';
import FormsPage from '../../pages/Forms/Forms';
import PopUp from '../PopUp/PopUpComponent';

describe('Forms tests', () => {
  test('test description input', () => {
    render(<FormsPage />);
    const nameInput = screen.getByTestId('forms-description__input') as HTMLInputElement;
    fireEvent.change(nameInput, { target: { value: 'xxxxx xxxxx' } });
    expect(nameInput.value).toBe('xxxxx xxxxx');
  });
  test('test date', () => {
    render(<FormsPage />);
    const dateInput = screen.getByTestId('forms-delivery__input') as HTMLInputElement;
    fireEvent.change(dateInput, { target: { value: '2023-04-25' } });
    expect(dateInput.value).toBe('2023-04-25');
  });
  test('test message', () => {
    render(<PopUp />);
    expect(screen.getByText('the data has been saved')).toBeInTheDocument();
  });
});
