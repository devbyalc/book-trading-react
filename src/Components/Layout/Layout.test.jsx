import { render } from '@testing-library/react';
import { UserContext } from '../../UserContext';
import Layout from './Layout';
import { BrowserRouter } from "react-router-dom";

test("renders <Layout />", () => {
  render(
    <UserContext.Provider value={{ user: "public"}}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </UserContext.Provider>
  );
});
