import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";

const Navbar = () => {
  return (
    <div className="navbar bg-inherit">
      <div className="navbar-start">
        <img src={logo} alt="image" className="h-14 object-contain" />
      </div>
      <div className="navbar-center">
        <Link className="cursor-pointer font-bold text-xl text-white " to="/">
          GameHub
        </Link>
      </div>
      <div className="navbar-end med">
        <div className="dropdown dropdown-left ">
          <div tabIndex={0} role="bdutton" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm bg-black text-white dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
          >
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
