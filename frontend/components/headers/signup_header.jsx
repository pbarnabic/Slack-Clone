import React from 'react';
import { Link } from 'react-router-dom';



const SignUpHeader = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="headerNav">
      <div id="title-and-logo-signup">
        <img id="logo-image" src={window.logoImage} />
        <Link to="/" className="header-link">
          <h1 id="title-of-site">slack</h1>
        </Link>
      </div>
    </nav>
  );

  return sessionLinks();
};


export default SignUpHeader;
