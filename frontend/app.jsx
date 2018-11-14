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


    <Route exact path="/" component={GreetingContainer} />
      <Switch>
        <div class="log-in-forms">
        
          <AuthRoute exact path="/login" component={LogInFormContainer} />
          <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        </div>
      </Switch>
  </div>
);

export default App;
