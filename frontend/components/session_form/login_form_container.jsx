import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearErrorsFromScreen, demoLogin } from '../../actions/session_actions';
import LogInForm from './login_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'login',
    navLink: <Link to="/signup">Sign up instead</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrorsFromScreen()),
    demoLogin: () => dispatch(demoLogin())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
