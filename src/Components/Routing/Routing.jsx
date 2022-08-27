import Home from '../../Pages/Home/Home';
import Requests from '../../Pages/Requests/Requests';
import Trades from '../../Pages/Trades/Trades';
import Users from '../../Pages/Users/Users';
import Layout from './Layout';
import Login from '../../Pages/Login';
import Profile from '../../Pages/Profile/Profile';
import MyBooks from '../../Pages/MyBooks/MyBooks';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="requests" element={<Requests />} />
          <Route path="trades" element={<Trades />} />
          <Route path="users" element={<Users />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="mybooks" element={<MyBooks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
