import { Link, NavLink } from "react-router-dom";
import Home from "../Pages/Home";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 mt-5 mb-13">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLink className="font-bold" to="/home">
              Home
            </NavLink>
            <NavLink className="font-bold" to="/listedbooks">
              Listed Books
            </NavLink>
            <NavLink className="font-bold" to="/readpages">
              Pages To Read
            </NavLink>
          </ul>
        </div>
        <Link to="/home" className="btn btn-ghost text-gray-800 text-2xl">
          Book Worm
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex justify-center in-checked: gap-8">
          <NavLink
            className="font-bold  border-2 px-4 py-2 border-green-600 rounded-xl"
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            className="font-bold  border-2 px-4 py-2 border-green-600 rounded-xl"
            to="/listedbooks"
          >
            Listed Books
          </NavLink>
          <NavLink
            className="font-bold  border-2 px-4 py-2 border-green-600 rounded-xl"
            to="/readpages"
          >
            Pages To Read
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end flex gap-3">
        <a
          href="#_"
          className="relative inline-flex items-center justify-center px-4 py-1 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
        >
          <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
          <span className="relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
            Sign In
          </span>
        </a>
        <a
          href="#_"
          className="relative inline-flex items-center justify-center px-4 py-1 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
        >
          <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-green-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-green-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
          <span className="relative text-green-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
            Sign Up
          </span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
