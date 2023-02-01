// Navbar.js
import React from 'react';

const Navbar = (props) => {
  const { theme } = props;
  const isSmallScreen = window.innerWidth < 500;

  return (
    <nav className={`navbar ${theme}`}>
      {isSmallScreen ? (
        <div className="hamburger-menu">
          <i className="fas fa-bars"></i>
        </div>
      ) : (
        <ul className="navbar-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
