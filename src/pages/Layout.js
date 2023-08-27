import { Outlet, Link } from "react-router-dom";
import './style.css';

const Layout = () => {
  return (
    <>
      <body>
          <div className="navbar">
              <button><Link to="/first">first Page</Link></button>
              <button><Link to="/second">second page</Link></button>
              <button><Link to="/third">third page</Link></button>
          </div>
      </body>
      <Outlet />
    </>
  )
};

export default Layout;