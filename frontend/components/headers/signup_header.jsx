import React from 'react';
import { Link } from 'react-router-dom';



const SignUpHeader = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="headerNav">
      <div className="test">
        <Link to="/" className="header-link">slack</Link>

      </div>
    </nav>
  );

  return sessionLinks();
};


export default SignUpHeader;
