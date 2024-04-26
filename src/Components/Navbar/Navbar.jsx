import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
     <div className="lg:flex bg-green-600 rounded-xl text-gray-200">
     <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allArtCraft">All Art & Craft</NavLink>
      </li>
      <li>
        <NavLink to="/addCraftItem">Add Craft Item</NavLink>
      </li>
      <li>
        <NavLink to="/myArtCraft">My Art & Craft List</NavLink>
      </li>
      <li>
        <NavLink to="/logIn">Log In</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
     </div>
    </>
  );

  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost mx-5 text-amber-500 text-[40px] lg:text-5xl font-bold">
        EcoArtisan
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[18px] font-semibold">
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
