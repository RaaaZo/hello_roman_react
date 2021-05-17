import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import React from 'react';
import AddUser from './AddUser';
import Dashboard from './Dashboard';

describe('Form Field', () => {
  test('should adds new user to the list', () => {
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
    fireEvent.click(screen.getByTestId('Consent'));

    fireEvent.click(screen.getByText('Add'));

    screen.getByText('Mateusz');
  });

  test('should prevents adding new user if consent is not checked', () => {
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

    const newUser = screen.queryByText('Mateusz');
    expect(newUser).not.toBeInTheDocument();
  });
});