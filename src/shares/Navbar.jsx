import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const navMenu = <>
  <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-yellow-800' : ''}>Home</NavLink></li>
  <li><NavLink to="/menu" className={({ isActive }) => isActive ? 'text-blue-700' : ''}>Our Menu</NavLink></li>
  <li><NavLink to="/order" className={({ isActive }) => isActive ? 'text-blue-700' : ''}>Order Food</NavLink></li>
  <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? 'text-blue-700' : ''}>DASHBOARD</NavLink></li>
  <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'text-blue-700' : ''}>CONTACT us</NavLink></li>
</>;
    return (
    <div className='fixed top-0 left-0 w-full bg-opacity-70 bg-black z-50'>
          <div className="navbar  w-11/12 mx-auto text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {navMenu}
            </ul>
          </div>
          <a className="text-xl">Big Boss <br /> Restaurant</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            {navMenu}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Login</a>
        </div>
      </div>
    </div>
    );
};

export default Navbar;