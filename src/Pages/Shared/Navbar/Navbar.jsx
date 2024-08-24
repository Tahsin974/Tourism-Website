import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  return (
    <>
    <div className="navbar bg-navbar font-bold">
      <div className="navbar-start">
      <Link className="btn btn-ghost text-xl text-white">Tourism-Website</Link>
        
        
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>My Bookings</Link>
          </li>
          <li>
            <Link>Manage All Bookings</Link>
          </li>
          <li>
            <Link>Add Places</Link>
          </li>
        </ul>
        
      </div>
      <div className="navbar-end">
      <Link className="btn btn-md rounded-none me-10 bg-orange-500 text-white border-orange-500 hover:bg-orange-600 hover:border-orange-500 hidden lg:flex ">Login</Link>
      <div className="dropdown dropdown-end">
      
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-navbar rounded-box z-[1] mt-3 sm:w-52 md:w-52 w-40 p-2 shadow"
          >
            <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>My Bookings</Link>
          </li>
          <li>
            <Link>Manage All Bookings</Link>
          </li>
          <li>
            <Link>Add Places</Link>
          </li>
          <li>
          <Link className="btn rounded-l-xl rounded-r-xl bg-orange-500 text-white border-orange-500 hover:bg-orange-600 hover:border-orange-500">Login</Link>
          </li>
          </ul>
        </div>

       
      </div>
    </div>
    
    
    </>
  );
};

export default Navbar;
