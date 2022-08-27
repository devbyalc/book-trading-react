import {render,screen} from "@testing-library/react";
import Navbar from "./Navbar";
import { UserContext } from "../../UserContext";
import { BrowserRouter } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
  useLocation: () => jest.fn(),
  useHref: () => jest.fn(),
}));

function renderNavbar(user) {
  return render(
    <UserContext.Provider value={{ user: user }}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

describe("Test <Navbar/> when user is not logged in", () => {
  it("Should display Site Brand", async () => {
    renderNavbar("public");
    const text = screen.getByText("Book Exchange");
    expect(text).toBeInTheDocument();
  });

  it("Should display nav Books", async () => {
    renderNavbar("public");
    const text = screen.getByText("Books");
    expect(text).toBeInTheDocument();
  });

  it("Should display nav Requests", async () => {
    renderNavbar("public");
    const text = screen.getByText("Trades");
    expect(text).toBeInTheDocument();
  });

  it("Should display nav Trades", async () => {
    renderNavbar("public");
    const text = screen.getByText("Trades");
    expect(text).toBeInTheDocument();
  });

  it("Should display nav Users", async () => {
    renderNavbar("public");
    const text = screen.getByText("Users");
    expect(text).toBeInTheDocument();
  });

  it("Should display nav Login", async () => {
    renderNavbar("public");
    const text = screen.getByText("Login");
    expect(text).toBeInTheDocument();
  });
});

describe("Test <Navbar/> when user is logged in", () => {
  it("Should display UserName", async () => {
    renderNavbar("Alicia");
    const text = screen.getByText("Alicia");
    expect(text).toBeInTheDocument();
  });

  it("Should display Profile", async () => {
    renderNavbar("Alicia");
    const text = screen.getByText("Profile");
    expect(text).toBeInTheDocument();
  });

  it("Should display MyBooks", async () => {
    renderNavbar("Alicia");
    const text = screen.getByText("My Books");
    expect(text).toBeInTheDocument();
  });

  it("Should display Logout", async () => {
    renderNavbar("Alicia");
    const text = screen.getByText("Logout");
    expect(text).toBeInTheDocument();
  });
});
