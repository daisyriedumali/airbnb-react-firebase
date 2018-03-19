import React, { Component } from 'react';

import { auth } from '../firebase';

import withAuthorization from './withAuthorization';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;

    auth.doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState(() => ({passwordOne:'', passwordTwo:'', error:null, success:'You have successfully reset your password.'}));
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '';

    return (
      <div className='pw-change'>
        <form onSubmit={this.onSubmit}>
          <input
            value={passwordOne}
            onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
            type="password"
            placeholder="New Password"
          />
          <input
            value={passwordTwo}
            onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
            type="password"
            placeholder="Confirm New Password"
          />
          { this.state.success && <p className='error-msg'>{this.state.success}</p> }
          { error && <p className='error-msg'>{error.message}</p> }
          <div className='pw-change-btn'>
            <button disabled={isInvalid} type="submit">
              Reset My Password
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(PasswordChangeForm);