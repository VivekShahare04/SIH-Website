// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // For custom styling, you can define a separate CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/projects">Neel</Link></li>
        <li><Link to="/team">Vivek</Link></li>
        <li><Link to="/resources">Param</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
