import { render, screen, waitFor } from '@testing-library/react';
import Hotels from './Hotels';
import HotelsContext from '../context/HotelsContext';
import { BrowserRouter } from 'react-router-dom';

test('Hotels component should render', async () => {
  const mockFunction = jest.fn()
  const wrapper = ({ children }) => (
    <HotelsContext.Provider
      value={
      {
        loading: true,
        error: '',
        hotels: [],
        fetchHotels: mockFunction,
      }
    }
    >
      {children}
    </HotelsContext.Provider>
  );
  render(<Hotels />, { wrapper });
  expect(await screen.findByText('Loading...')).toBeVisible();
  await waitFor(() => expect(mockFunction).toHaveBeenCalledTimes(1));
});

test('Hotels component should render a list of hotels', async () => {
  const wrapper = ({ children }) => (
    <BrowserRouter>
      <HotelsContext.Provider
        value={{
            loading: false,
            error: '',
            hotels: [
              {
                id: 1,
                title: 'Hotel 1',
                thumbnail: '',
              },
              {
                id: 2,
                title: 'Hotel 2',
                thumbnail: '',
              }
            ],
            fetchHotels: jest.fn(),
          }}
      >
        {children}
      </HotelsContext.Provider>
    </BrowserRouter>
  );
  render(<Hotels />, { wrapper });
  expect(screen.queryByText('Loading...')).toBeNull();
  expect(screen.queryAllByRole('link').length).toBe(2);
});
