import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup, header-class">
      <div id="title-and-logo">
        <Link to="/" className="header-link">
          <h1 id="title-of-site">slack</h1>
        </Link>
      </div>
      <div header = "sign-in-get-started-header">
        <Link to="/login"><span id="sign-in-text">Sign In</span></Link>
        &nbsp;
        <Link to="/signup"><button id="get-started">GET STARTED</button></Link>
      </div>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group header-class">
      <div id="title-and-logo">
        <Link to="/" className="header-link">
          <h1 id="title-of-site">slack</h1>
        </Link>
      </div>
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
