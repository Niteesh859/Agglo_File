// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css'; // Ensure to create a corresponding CSS file for styling
import logo from '../assets/chlogo.png'; // Adjusted path for logo import

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Logo */}
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="navbar-name">
        {/* Website name */}
        Clear Horizons
      </div>
      <ul className="navbar-links">
        <li><a href="#about">About Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
