import React from 'react';
import { Link } from 'react-router-dom';



const LogInHeader = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="headerNav">
        <Link to="/" className="header-link">slack</Link>
    </nav>
  );

  return sessionLinks();
};


export default LogInHeader;
