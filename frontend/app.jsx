import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './components/greeting/greeting_container';
import SignUpFormContainer from './components/session_form/signup_form_container';
import LogInFormContainer from './components/session_form/login_form_container';
import {AuthRoute} from './util/route_util';
const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Slack Clone</h1>
      </Link>
      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>
  </div>
);

export default App;
