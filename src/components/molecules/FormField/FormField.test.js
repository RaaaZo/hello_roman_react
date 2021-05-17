import React from 'react';
import FormField from './FormField';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('Form Field', () => {
  test('should render a component', () => {
    renderWithProviders(<FormField label="name" name="name" id="name" />);
  });
});
