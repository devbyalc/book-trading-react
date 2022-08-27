import { render, screen} from '@testing-library/react';
import Users from './Users';

test('renders <Users/>', () => {
  render(<Users />);
  const text = screen.getByText("Users")
  expect(text).toBeInTheDocument();
});
