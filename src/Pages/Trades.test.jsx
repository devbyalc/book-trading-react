import { render, screen} from '@testing-library/react';
import Trades from './Trades';

test('renders <Trades/>', () => {
  render(<Trades />);
  const text = screen.getByText("Trades")
  expect(text).toBeInTheDocument();
});
