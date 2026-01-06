// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Allows navigation to other routes

const Header = () => {
  return (
    <header>
      <h1>My Website Title</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {/* Add more links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
