import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';

const MakeReservation = props => (
  <div>
  	<Link to={routes.LANDING}>Home</Link>
  	<h5>Make a reservation!</h5>
  </div>
);

export default MakeReservation;