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
import LogInHeaderContainer from './components/headers/login_header_container';
import SignUpHeaderContainer from './components/headers/signup_header_container';
import {AuthRoute} from './util/route_util';
const App = () => (
  <div>

    <Switch>
      <Route exact path="/" component={GreetingContainer} />
      <Route exact path="/signup" component={SignUpHeaderContainer} />
      <Route exact path="/login" component={LogInHeaderContainer} />
    </Switch>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>

  </div>
);

export default App;
