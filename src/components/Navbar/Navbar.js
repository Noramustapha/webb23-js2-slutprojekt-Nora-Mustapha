import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar({ cartItemCount }) {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
       
        <li>
          <Link to="/cart">Cart ({cartItemCount})</Link>
        </li>
        
      </ul>
    </nav>
  );
}

export default Navbar;