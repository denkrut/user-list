import React from "react";
import "./Navbar.styles.scss";
import { Link } from "react-router-dom";
function Navbar({ child }) {
  return (
    <nav className="navbar-container">
      <div className="container">
        <Link to="/">Home</Link>
        <Link to="/usersFormDb">DB users</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;

// <ul>
// <li>
//   <Link to="/">Home</Link>
// </li>
// <li>
//   <Link to="/about">About</Link>
// </li>
// </ul>
