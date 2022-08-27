import { render, screen } from "@testing-library/react";
import MyBooks from "./MyBooks";

test("renders <MyBooks/>", () => {
  render(<MyBooks />);
  const text = screen.getByText("My Books");
  expect(text).toBeInTheDocument();
});
