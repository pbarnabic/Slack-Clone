import React from 'react';
import { withRouter } from 'react-router-dom';

class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email_address: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`} class="errors">
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div class="main-page">
        <div class="sign-in-or-up">
          <form onSubmit={this.handleSubmit} id="sign-in-form" >
            <p id="sign-in-title">Sign in to Slack Clone</p>

            {this.renderErrors()}
            <div class="inputs-and-instructions">
              <p id="log-in-instructions">Enter your <strong>email address</strong> and <strong>password</strong>.</p>
              <br/>
              <input type="text"
                value={this.state.email_address}
                onChange={this.update('email_address')}
                placeholder="you@example.com"
              />

              <br/>

              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="password"
              />

              <br/>
              <input id="sign-in-button" type="submit" value="Sign In" />
            </div>
          </form>
          <div id="signup-instead">{this.props.navLink}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(LogInForm);
