import { setupServer } from 'msw';
import { handlers } from 'mocks/handlers';
import SearchBar from './SearchBar';
import { render } from 'test-utils';

describe('Search Bar', () => {
  test('should renders the component', () => {
    render(<SearchBar />);
  });
});
