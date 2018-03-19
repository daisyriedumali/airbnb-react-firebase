import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../firebase';
import * as routes from '../constants/routes';

const PasswordForgetPage = () =>
  <div className='pw-forgot'>
    <h1>Forgot Password?</h1>
    <PasswordForgetForm />
    <Link to={routes.LANDING}><div className='landing-logo'></div></Link>
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    auth.doPasswordReset(email)
      .then(() => {
        this.setState(() => ({email:'', error:null, success:'An email has been sent to reset your password.'}));
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      error,
    } = this.state;

    const isInvalid = email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={this.state.email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        { error && <p className='error-msg'>{error.message}</p> }
        { this.state.success && <p className='error-msg'>{this.state.success}</p> }
        <div className='pw-forgot-btn'>
          <button disabled={isInvalid} type="submit">
            Reset My Password
          </button>
        </div>
      </form>
    );
  }
}

const PasswordForgetLink = () =>
  <p className='forgot-pw'>
    <Link to="/pw-forget">Forgot Password?</Link>
  </p>

export default PasswordForgetPage;

export {
  PasswordForgetForm,
  PasswordForgetLink,
};