import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div>
    <nav className="login-signup header-class">
        <div id="title-and-logo">
          <img id="logo-image" src="https://banner2.kisspng.com/20180329/rte/kisspng-slack-logo-business-company-workflow-apps-5abd027d3f0c51.1266194415223363812583.jpg" />
          <Link to="/" className="header-link">
            <h1 id="title-of-site">slack</h1>
          </Link>
        <div className="middle-of-header">
          <span className="middle-header-items">Why Slack?</span>
          <span className="middle-header-items">Solutions</span>
          <span className="middle-header-items">Resources</span>
          <span className="middle-header-items">Pricing</span>
        </div>
      </div>



      <div className = "sign-in-get-started-header">
        <Link to="/login">
          <div id="sign-in-homepage-div">
            <span id="sign-in-text">Sign In</span>
          </div>
        </Link>
        &nbsp;
        <Link to="/signup"><button id="get-started">GET STARTED</button></Link>
      </div>
    </nav>

    <section className="homepage-main-section">
      <div id="home-left-half">
        <img id="big-image" src="https://a.slack-edge.com/9183b/img/slack_kit/illo-teamwork.png"/>
      </div>
      <div id="home-right-half">
        <br/>
        <span id="WWH">Where Work Happens</span>
        <br/>
<p id="Description-paragraph">When your team needs to kick off a project, hire a new employee, deploy some code, review a sales contract, finalize next year's budget, measure an A/B test, plan your next office opening, and more, Slack has you covered.</p>




      </div>
    </section>
  </div>
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
