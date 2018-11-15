import React from 'react';
import { Link } from 'react-router-dom';



const LogInHeader = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup header-class">
        <div id="title-and-logo">
          <img id="logo-image" src={window.logoImage} />
          <Link to="/" className="header-link">
            <h1 id="title-of-site">slack</h1>
          </Link>
      </div>



      <div className = "sign-in-get-started-header">
        <div className="middle-of-header-sign-in">
          <span className="middle-header-items-sign-in">Product</span>
          <span className="middle-header-items-sign-in">Pricing</span>
          <span className="middle-header-items-sign-in">Support</span>
          <span className="middle-header-items-sign-in" id="bigger-mid-header-item">Create a new workspace</span>
          <span className="middle-header-items-sign-in" id="bigger-mid-header-item">Find your workspace</span>
        </div>
        <Link to="/login">
          <div id="sign-in-login-page-div">
            <button id="sign-in-button-signin-page">Sign In</button>
          </div>
        </Link>
      </div>
    </nav>
  );

  return sessionLinks();
};


export default LogInHeader;
