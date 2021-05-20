import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const AllTheProviders = ({ children }) => {
  const history = createMemoryHistory();

  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Router>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
