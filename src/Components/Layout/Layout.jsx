import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
