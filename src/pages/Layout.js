import { Outlet, Link } from "react-router-dom";
import './style.css';

const Layout = () => {
  return (
    <>
      <body>
          <div className="navbar">
              <button><Link to="/home">Home</Link></button>
              <button><Link to="/blogs">Blogs</Link></button>
              <button><Link to="/contact">Contact</Link></button>
          </div>
      </body>
      <Outlet />
    </>
  )
};

export default Layout;