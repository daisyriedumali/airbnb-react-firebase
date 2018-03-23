import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import withAuthentication from './withAuthentication';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import * as routes from '../constants/routes';
import { Link } from 'react-router-dom';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
// BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

const events = [
	{
	  id: 1,
	  title: 'Conference',
	  start: new Date(2018, 3, 11),
	  end: new Date(2018, 3, 13),
	  desc: 'Big conference for important people',
	},
	{
	  id: 2,
	  title: 'Meeting',
	  start: new Date(2018, 3, 12, 10, 30, 0, 0),
	  end: new Date(2018, 3, 12, 12, 30, 0, 0),
	  desc: 'Pre-meeting meeting, to prepare for the meeting',
	},
	{
	  id: 3,
	  title: 'Lunch',
	  start: new Date(2018, 3, 12, 12, 0, 0, 0),
	  end: new Date(2018, 3, 12, 13, 0, 0, 0),
	  desc: 'Power lunch',
	},
	{
	  id: 4,
	  title: 'Meeting',
	  start: new Date(2018, 3, 12, 14, 0, 0, 0),
	  end: new Date(2018, 3, 12, 15, 0, 0, 0),
	},
	{
	  id: 5,
	  title: 'Happy Hour',
	  start: new Date(2018, 3, 12, 17, 0, 0, 0),
	  end: new Date(2018, 3, 12, 17, 30, 0, 0),
	  desc: 'Most important meal of the day',
	},
];

const divStyle = {
	width: '100%',
	height: '900px'
};

const Reservation = props => (
  <div style={divStyle}>
  	<Link to={routes.LANDING}>Home</Link>
    <BigCalendar
	    events={events}
	    step={20}
	    timeslots={8}
	    defaultView="week"
	    defaultDate={new Date(2018, 3, 12)}
	    drilldownView="agenda"
	  />
  </div>
);

export default Reservation;