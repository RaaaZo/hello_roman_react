import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import NewsSection from './NewsSection';
import { renderWithProviders } from 'helpers/renderWithProviders';
import { screen } from '@testing-library/react';

const mock = new MockAdapter(axios);

const query = `
        {
            allArticles {
            id
            title
            category
            content
            image {
                url
                }
            }
        }
        `;

describe('News Section', () => {
  afterEach(() => {
    mock.reset();
  });

  test('should displays error when the articles are not loaded', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(500);

    renderWithProviders(<NewsSection />);
    await screen.findByText(/sorry/i);
  });

  test('should displays the articles', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(200, {
      data: {
        allArticles: [
          { id: 1, title: 'Test', category: 'Test', content: 'Test' },
        ],
      },
    });

    renderWithProviders(<NewsSection />);
    await screen.findAllByText(/Test/);
  });
});
