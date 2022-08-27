import { render, screen} from '@testing-library/react';
import Profile from './Profile';

test('renders <Profile/>', () => {
  render(<Profile />);
  const text = screen.getByText("Profile")
  expect(text).toBeInTheDocument();
});
