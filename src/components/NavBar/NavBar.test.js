import { render, screen, fireEvent } from '@testing-library/react';
import NavBar from './NavBar';

test('NavBar component should render', () => {
  const title = 'Test app';
  render(<NavBar title={title} />)
  expect(screen.getByRole('heading')).toHaveTextContent(title);
});

test('NavBar component button events', () => {
  const mockFunction = jest.fn();
  render(<NavBar goBack={mockFunction} openForm={mockFunction} />);
  fireEvent.click(screen.getByText(`< Go Back`));
  fireEvent.click(screen.getByText(`+ Add Review`));
  expect(mockFunction).toHaveBeenCalledTimes(2);
});
