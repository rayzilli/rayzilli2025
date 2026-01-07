// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Allows navigation to other routes

const Header = () => {
  return (
    <header>
      <h1><Link to="/">Ray Zilli</Link></h1>
      <nav>
        <ul>
          <li>
            <Link to="/about">info</Link>
          </li>
          {/* Add more links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
