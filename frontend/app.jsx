import React from 'react';
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
import MainPageContainer from './components/main_page/main_page_container';
import MessagePageContainer from './components/messages_page/messages_page_container';
import {AuthRoute} from './util/route_util';
import {API_WS_ROOT} from '../constants/constants.js';
const App = () => (
  <div>

    <Switch>
      <Route exact path="/" component={GreetingContainer} />
      <Route exact path="/signup" component={SignUpHeaderContainer} />
      <Route exact path="/login" component={LogInHeaderContainer} />
      <Route exact path="/messages" component={MainPageContainer} />
      <Route exact path="/messages/:id" component={MessagePageContainer}/>
    </Switch>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>

  </div>
);

export default App;
