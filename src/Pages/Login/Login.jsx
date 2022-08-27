import { useContext, useState, useEffect } from "react";
import { UserContext } from "../UserContext";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const [userInput, setUserInput] = useState("");
  const navigation = useNavigate();
  const location = useLocation();

  const onLogin = () => {
    setUser(userInput);
  
  };

  useEffect(() => {
    if (user !== "public") {
      navigation("/" + location.search);
    }
  },[user]);

  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">What is your username?</span>
      </label>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button className="btn btn-primary mt-5" onClick={() => onLogin()}>
        Login
      </button>
    </div>
  );
};

export default Login;
