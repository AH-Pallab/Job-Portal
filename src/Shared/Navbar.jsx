import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaToolbox } from "react-icons/fa6";
import AuthContext from "../Providers/AuthProviders/AuthContext";

const Navbar = () => {
  const { user,setUser, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(()=> {
      setUser(null);
    })
  }

  const list = (
    <>
      <li>
        <NavLink>Home</NavLink>
      </li>
      <li>
        <NavLink>About</NavLink>
      </li>
      <li>
        <NavLink>Home</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 px-20">
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
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {list}
          </ul>
        </div>
        <FaToolbox className="text-[#070382] h-6 w-6 hidden md:block" />
        <a className="btn btn-ghost text-[#05033b] text-2xl p-2 hidden md:flex">
          Job Dob
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{list}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button className="btn bg-blue-600 text-white" onClick={handleLogOut}>
            Log Out
          </button>
        ) : (
          <>
            <NavLink to={"/register"} className="underline mr-4">
              Register
            </NavLink>
            <NavLink to={"/login"} className="btn bg-blue-600 text-white">
              Login
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
