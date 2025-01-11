import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/Authprovider';
import { FaShoppingCart } from 'react-icons/fa';
import useCarts from '../hooks/useCarts';
import useAdmin from '../hooks/useAdmin';

const Navbar = () => {
 const {user, logOut} = useContext(AuthContext);
 const [isAdmin] = useAdmin();
 const [cart] = useCarts();
  const navMenu = <>
  <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-yellow-800' : ''}>Home</NavLink></li>
  <li><NavLink to="/menu" className={({ isActive }) => isActive ? 'text-blue-700' : ''}>Our Menu</NavLink></li>
  <li><NavLink to="/order/salad" className={({ isActive }) => isActive ? 'text-blue-700' : ''}>Order Food</NavLink></li>

{
    user && isAdmin && <li><NavLink to="//dashboard/adminHome" className={({ isActive }) => isActive ? 'text-blue-700' : ''}>Dashboard</NavLink></li>
}

{
    user && !isAdmin && <li><NavLink to="/dashboard/userHome" className={({ isActive }) => isActive ? 'text-blue-700' : ''}>Dashboard</NavLink></li>
}

    <li>
     <Link to='/dashboard/cart'>
     <button className="btn">
      <FaShoppingCart />
        <div className="badge badge-secondary">+{cart.length}</div>
      </button>
     </Link>
    </li>
{
  user ? <>
<button onClick={logOut} className="btn btn-ghost">Log Out</button>
  </> : <>
    <li><NavLink to="/login" className={({ isActive }) => isActive ? 'text-blue-700' : ''}>Login</NavLink></li>
  </>
}
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
          <Link to='/signup' className="btn">SignUp</Link>
        </div>
      </div>
    </div>
    );
};

export default Navbar;