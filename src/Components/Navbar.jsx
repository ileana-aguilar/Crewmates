import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './Navbar.css';
const Navbar = () => {
    return (
      <div className='menu'>
        
          <ul>
            <li className="menu-item" key="home-button">
                <Link to="/">
                Home
                </Link>
            </li>
            <li className="menu-item" >
                <Link to="/">
                    Create a Crewmate!
                </Link>
            </li>
            <li className="menu-item" >
                <Link to="/">
                    Crewmate Gallery
                </Link>
            </li>
          </ul>
        
        <Outlet />
      </div>
    );
  };
export default Navbar;