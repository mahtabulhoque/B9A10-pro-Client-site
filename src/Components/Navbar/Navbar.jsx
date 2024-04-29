import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState('light')


  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  
useEffect(() => {

  localStorage.setItem('theme', theme)
  const localTheme = localStorage.getItem('theme')
  document.querySelector('html').setAttribute('data-theme', localTheme)
},[theme])  



  const handleToggle = (e) =>{
    if(e.target.checked){
      setTheme('night')
    }else{
      setTheme('light')
    }

  }
  console.log(theme);

  const links = (
    <div className="lg:flex rounded-xl">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allArtCraft">All Art & Craft</NavLink>
      </li>
      <li>
        <NavLink to="/addCraftItems">Add Craft Item</NavLink>
      </li>
      <li>
        <NavLink to="/myArtCraft">My Art & Craft List</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </div>
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
        <a className="mx-5 text-amber-600 text-[40px] lg:text-5xl font-bold">
          EcoArtisan
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[18px] font-semibold">
          {links}
        </ul>
      </div>

      <div>
      <input onChange={handleToggle} type="checkbox" value="synthwave" className="toggle theme-controller"/>
      </div>

      <div className="navbar-end gap-4">
        {user ? (
          <>
            <span>{user.email}</span>
            {user.photoUrl ? (
              <img
                src={user.photoUrl}
                alt="User"
                className="h-8 w-8 rounded-full"
              />
            ) : (
              <span>No photo</span> 
            )}
            <button onClick={handleLogOut} className="btn">
              Log Out
            </button>
          </>
        ) : (
          <Link to={"/logIn"}>
            <button className="btn font-bold bg-green-500 ">LogIn</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
