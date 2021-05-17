import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import React from 'react';
import AddUser from './AddUser';
import Dashboard from './Dashboard';

describe('Form Field', () => {
  test('should Renders the component', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );

    fireEvent.change(screen.getByTestId('Name'), {
      target: { value: 'Mateusz' },
    });
    fireEvent.change(screen.getByTestId('Attendance'), {
      target: { value: '55%' },
    });
    fireEvent.change(screen.getByTestId('Average'), {
      target: { value: '4.5' },
    });

    fireEvent.click(screen.getByText('Add'));

    screen.getByText('Mateusz');
  });
});
