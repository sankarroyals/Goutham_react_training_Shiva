import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'


const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/Reviews">Reviews</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
