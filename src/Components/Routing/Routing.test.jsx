import { render } from '@testing-library/react';
import { UserContext } from '../../UserContext';
import Routing from "./Routing";

test("renders <Routing />", () => {
  render(
    <UserContext.Provider value={{ user: "public"}}>
      <Routing/>
    </UserContext.Provider>
  );
});
