import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import withAuthentication from './withAuthentication';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import * as routes from '../constants/routes';
import { Link } from 'react-router-dom';
import Header from './common/header';

BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

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
	maxWidth: '1260px',
	height: '900px'
};

class Reservation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			view 		 : 'month',
			day : (new Date(2018, 3, 12))
		}
		this.handleNavigate = this.handleNavigate.bind(this);
		this.handleView = this.handleView.bind(this);
		this.handleSelectDate = this.handleSelectDate.bind(this);
		this.handleSelectEvent = this.handleSelectEvent.bind(this);
	}
	
	handleNavigate (day) {
		this.setState({day: day});
	}
	
	handleView (view) {
		this.setState({view: view});
	}
	
	handleSelectDate (slotInfo) {
		console.log(slotInfo);
		this.setState({view: 'day', day: slotInfo.start});
	}

	handleSelectEvent (event) {
		alert(
            `\nEvent: ${event.title}` + 
            `\nstart ${event.start.toLocaleString()} ` +
            `\nend: ${event.end.toLocaleString()}`
		);
	}

	render () {
		return (
			<div className="landing">
				<Header />
				<div style={divStyle}>
			    	<BigCalendar
			    		selectable
					    events={events}
					    step={10}
					    timeslots={8}
					    date={this.state.day}
					    drilldownView="agenda"
					    onSelectEvent={this.handleSelectEvent}
					    view={this.state.view}
					    onView={this.handleView}
					    onNavigate={this.handleNavigate}
					    onSelectSlot={this.handleSelectDate}
					  />
			  	</div>
			</div>
	  	);
	}
}

export default Reservation;