import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from './SignUp';
import { PasswordForgetLink } from './PasswordForget';
import { auth } from '../firebase';
import * as routes from '../constants/routes';

import { Link } from 'react-router-dom';
import Header from './common/header'

const SignInPage = ({ history }) =>
  <div>
    <Header />
    <div className='login-wrapper'>
      <h2>Log In</h2>
      <div className="form-wrapper">
        <SignInForm history={history} />
        <PasswordForgetLink />
        <SignUpLink />
      </div>
    </div>
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.LANDING);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="">Email</label>
        <input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <label htmlFor="">Password</label>
        <input
          className="login-password"
          value={password}
          onChange={event => this.setState(byPropKey('password', event.target.value))}
          type="password"
          placeholder="Password"
        />
        {error && <p className='error-msg'>{error.message}</p>}
        <div className='sign-in-btn'>
          <button disabled={isInvalid} type="submit">
            Log In
          </button>
        </div>
      </form>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};