import React from 'react';
import { Link } from 'react-router-dom';



const SignUpHeader = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="headerNav">
      <div id="title-and-logo-signup">
        <img id="logo-image" src="https://banner2.kisspng.com/20180329/rte/kisspng-slack-logo-business-company-workflow-apps-5abd027d3f0c51.1266194415223363812583.jpg" />
        <Link to="/" className="header-link">
          <h1 id="title-of-site">slack</h1>
        </Link>
      </div>
    </nav>
  );

  return sessionLinks();
};


export default SignUpHeader;
