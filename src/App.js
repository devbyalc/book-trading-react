import "./App.css";
import Routing from "./Components/Routing";
import { UserContext } from "./UserContext";
import { useState,useMemo } from "react";

function App() {
  const [user, setUser] = useState(null);
  const value = useMemo(()=>({user,setUser}),[user,setUser]);

  return (
    <UserContext.Provider value={value}>
      <Routing />
    </UserContext.Provider>
  );
}

export default App;
