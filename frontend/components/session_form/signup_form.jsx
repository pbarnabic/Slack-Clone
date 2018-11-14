import React from 'react';
import { withRouter } from 'react-router-dom';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      first_name: '',
      last_name: '',
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
      
      <div class="sign-in-or-up sign-up-page">
        <div id="positioning-div">
        <form onSubmit={this.handleSubmit} >
          <span id="sign-up-title">Join Slack Clone</span>
          <br/>

          {this.renderErrors()}
          <div class="inputs-and-instructions signup-inputs">
            <div class="inputs-on-signup">
              <label class="sign-up-form-label">E-mail Address
                <br/>
                <input type="text"
                  value={this.state.email_address}
                  onChange={this.update('email_address')}
                  placeholder="name@example.com"
                />
              </label>
              <br/>
              <label class="sign-up-form-label">First Name
                <br/>
                <input type="text"
                  value={this.state.first_name}
                  onChange={this.update('first_name')}
                  placeholder="First name"
                />
              </label>
              <br/>
              <label class="sign-up-form-label">Last Name
                <br/>
                <input type="text"
                  value={this.state.last_name}
                  onChange={this.update('last_name')}
                  placeholder="Last name"
                />
              </label>
              <br/>
              <label class="sign-up-form-label">Display Name
                <br/>
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  placeholder="Display name"
                />
              </label>
              <br/>
              <label class="sign-up-form-label">Password
                <br/>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="password"
                />
              </label>
              <br/>


            <input id= "sign-up-button" type="submit" value="Join" />
            <br/>
            </div>
            <div id="signin-instead">{this.props.navLink}</div>
          </div>

        </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUpForm);
