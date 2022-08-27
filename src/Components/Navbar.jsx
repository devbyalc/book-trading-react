import styles from "./Navbar.module.css";
import { useState, useContext, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../UserContext";

const Navbar = () => {
  const { user,setUser } = useContext(UserContext);
  const [toggleOnReq, setToggleOnReq] = useState(false);
  const [toggleUser, setToggleUser] = useState(false);
  const navigation = useNavigate();
  const location = useLocation();

  const onClickRequest = () => {
    setToggleOnReq((prevState) => !prevState);
  };

  const onUserClick = () => {
    setToggleUser((prevState)=> !prevState);
  }

  const onLogout = () => {
    setUser(null);
  }

  useEffect(() => {
    if (!user) {
      navigation("/login" + location.search);
    }
  },[user]);

  const renderUserDropdown = () => {
    return (
      <div className={styles.dropdown}>
        <button onClick={() => onUserClick()} className={styles.dropbtn}>
          {user}
        </button>
        <div
          id="myDropdown"
          className={styles.dropdownContent + " " + (toggleUser && styles.show)}
        >
          <Link to="/profile">Profile</Link>
          <Link to="/mybooks">My Books</Link>
          <button onClick={()=>onLogout()}>Logout</button>
        </div>
      </div>
    );
  };

  return (
    <nav className={styles.navContent}>
      <div className={styles.navLeft}>
        <Link to="/">
          <span className="ml-10 mr-5">Book Exchange</span>
        </Link>
        <ul className={styles.navItems}>
          <li className={"p-4"}>
            <Link to="/">Books</Link>
          </li>
          {/* <li
            className={
              "mr-5 " + styles.caret + " " + (toggleOn && styles.caretDown)
            }
            onClick={() => onClick()}
          >
            <span>Requests</span>
            <ul className={ toggleOn ? styles.active : styles.nested}>
              <li>
                <Link to="/requests">All Requests</Link>
              </li>
              <li>
                <Link to="/requests/new">Create Requests</Link>
              </li>
            </ul>
          </li> */}
          <li>
            <div className={styles.dropdown}>
              <button onClick={() => onClickRequest()} className={styles.dropbtn}>
                Requests
              </button>
              <div
                id="myDropdown"
                className={
                  styles.dropdownContent + " " + (toggleOnReq && styles.show)
                }
              >
                <Link to="/requests">All Requests</Link>
                <Link to="/requests">Create Requests</Link>
              </div>
            </div>
          </li>

          <li className="p-4">
            <Link to="/trades">Trades</Link>
          </li>
          <li className="p-4">
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </div>
      <div className={styles.navRight}>
        {!user && (
          <Link to="/login">
            <span className="p-4">Login</span>
          </Link>
        )}
        {user && renderUserDropdown()}
      </div>
    </nav>
  );
};

export default Navbar;
