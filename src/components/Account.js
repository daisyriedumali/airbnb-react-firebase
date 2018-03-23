import React from 'react';
import PropTypes from 'prop-types';

import * as routes from '../constants/routes';
import { Link } from 'react-router-dom';

import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization';
import Header from './common/header'

const AccountPage = (props, { authUser }) =>
  <div>
    <Header />
    <div className='acc-page-wrapper'>
      <h2>Account</h2>
      <div className='details-wrapper'>
        <label htmlFor="">Email Address</label>
        <p>{authUser.email}</p>
        <PasswordChangeForm />
      </div>
    </div>
  </div>

AccountPage.contextTypes = {
  authUser: PropTypes.object,
};

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);