import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { describe, test, expect } from 'vitest';

import App from '../../App';

describe('Router form test', () => {
  test('Route form rendering', async () => {
    render(<App />, { wrapper: BrowserRouter });

    expect(screen.getByText('Forms')).toBeInTheDocument();

    const user = userEvent.setup();
    const about = vi.spyOn(user, 'click');
    const aboutLink = screen.getByText(/Forms/i);

    await user.click(aboutLink);
    expect(about).toHaveBeenCalledTimes(1);
  });
});
