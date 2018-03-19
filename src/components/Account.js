import React from 'react';
import PropTypes from 'prop-types';

import * as routes from '../constants/routes';
import { Link } from 'react-router-dom';

import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization';

const AccountPage = (props, { authUser }) =>
  <div className='acc-page-main'>
  	<div className='person-icon'></div>
    <h2>Account</h2>
    <div className='details'>
    	<div>Email Address: {authUser.email}</div>
    </div>
    <PasswordChangeForm />
    <div className='acc-page'>
    	<Link to={routes.LANDING}>Home </Link>
    </div>
  </div>

AccountPage.contextTypes = {
  authUser: PropTypes.object,
};

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);