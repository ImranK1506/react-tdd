import { render } from '@testing-library/react';
import NavBar from './NavBar';

test('NavBar component should render', () => {
  const view = render(<NavBar title='Test #2' />)
  expect(view).toMatchSnapshot();
});
