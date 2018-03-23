import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';
import Reservations from './Reservation';
import MakeReservation from './MakeReservation';
import * as routes from '../constants/routes';
import Catalog from './catalog';
import withAuthentication from './withAuthentication';

import '../styles/app.css';

const App = () =>
  <Router>
    <div id='content'>
      <Route exact path={routes.LANDING}            component={() => <Catalog />} />
      <Route exact path={routes.SIGN_UP}            component={() => <SignUpPage />} />
      <Route exact path={routes.SIGN_IN}            component={() => <SignInPage />} />
      <Route exact path={routes.PASSWORD_FORGET}    component={() => <PasswordForgetPage />} />
      <Route exact path={routes.ACCOUNT}            component={() => <AccountPage />} />
      <Route exact path={routes.HOME}               component={() => <HomePage />} />
      <Route exact path={routes.RESERVE}            component={() => <MakeReservation />} />
      <Route exact path={routes.VIEW_RESERVATIONS}  component={() => <Reservations />} />
    </div>
  </Router>

export default withAuthentication(App);