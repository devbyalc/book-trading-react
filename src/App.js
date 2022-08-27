import "./App.css";
import Routing from "./Components/Routing/Routing";
import { UserContext } from "./UserContext";
import { useState,useMemo, useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(()=>{
    setUser("public")
  },[])
  
  const value = useMemo(()=>({user,setUser}),[user,setUser]);

  return (
    <UserContext.Provider value={value}>
      <Routing />
    </UserContext.Provider>
  );
}

export default App;
