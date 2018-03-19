import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';

const LandingPage = () =>
  <div className='landing'>
    <div className='landing-logo'></div>
    <h1><Link to={routes.LANDING}>App Name</Link></h1>
    <Navigation />
  </div>

export default LandingPage;