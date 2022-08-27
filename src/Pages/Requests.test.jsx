import { render, screen} from '@testing-library/react';
import Requests from './Requests';

test('renders <Requests/>', () => {
  render(<Requests />);
  const text = screen.getByText("Requests")
  expect(text).toBeInTheDocument();
});
