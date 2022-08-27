import { render, screen} from '@testing-library/react';
import Home from './Home';

test('renders <Home/>', () => {
  render(<Home />);
  const text = screen.getByText("HOME")
  expect(text).toBeInTheDocument();
});
