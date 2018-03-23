import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';
import Header from './common/header';
import DateTime from 'react-datetime';
import '../styles/react-datetime.scss';
import moment from 'moment';
import { auth, db, firebase } from '../firebase';
import PropTypes from 'prop-types';
import BigCalendar from 'react-big-calendar';
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
   
class MakeReservation extends Component {
  constructor(props) {
    super(props);
    var curDate = new Date();
    this.state = {
      title         : '',
      desc          : '',
      roomName      : '',
      roomDesc      : '',
      roomId        : props.params.match.params.room,
      startDateTime : curDate,
      endDateTime   : curDate,
      startDateTimeTimestamp : curDate.getTime(),
      endDateTimeTimeTimestamp : curDate.getTime(),
      events: []
    }  

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStartDateTimeChange = this.handleStartDateTimeChange.bind(this);
    this.handleEndDateTimeChange = this.handleEndDateTimeChange.bind(this);
    this.validate = this.validate.bind(this);
    this.handleNavigate = this.handleNavigate.bind(this);
    this.handleView = this.handleView.bind(this);
    this.handleSelectDate = this.handleSelectDate.bind(this);
    this.handleSelectEvent = this.handleSelectEvent.bind(this);
  }
  
  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      this.setState(() => ({ authUser }));
    });
    this.getEvents();
    this.getRoom();
  }
  
  getRoom() {
    db.getRoomByRoomId(this.state.roomId)
      .then((result) => {
        console.log(result.val());
        let room = result.val();
        this.setState({roomName: room.name, roomDesc: room.description});
      })
      .catch(error => {
        console.log(error);
    });
  }

  getEvents() {
    db.onceGetBookingsByRoomId(this.state.roomId)
      .then((result) => {
        let bookings = Object.values(result.val());
        let events = bookings.map((book, index) => {
          return {
            title: book.title,
            start: new Date(book.check_in_timestamp),
            end: new Date(book.check_out_timestamp),
            desc: '',
          }
        });
        this.setState({ events: events });
      })
      .catch(error => {
        console.log(error);
    });
  }

  handleNavigate (day) {
    this.setState({day: day});
  }
  
  handleView (view) {
    this.setState({view: view});
  }
  
  handleSelectDate (slotInfo) {
    this.setState({view: 'day', day: slotInfo.start});
  }

  handleSelectEvent (event) {
    alert(
            `\nEvent: ${event.title}` + 
            `\nstart ${event.start.toLocaleString()} ` +
            `\nend: ${event.end.toLocaleString()}`
    );
  }

  handleStartDateTimeChange(dateTime) {
    let date = new Date(dateTime.format('L LTS'));
    this.setState({startDateTime: date, startDateTimeTimestamp: date.getTime()});
  }

  handleEndDateTimeChange(dateTime) {
    let date = new Date(dateTime.format('L LTS'));
    this.setState({endDateTime: date, endDateTimeTimeTimestamp: date.getTime()});
  }
  
  validateReservation () {
    let valid = true;
    
    this.state.events.map((event) => {
      if (Math.max(0, Math.min(event.end, this.state.endDateTime) - Math.max(event.start, this.state.startDateTime)) > 0) {
        valid = false;
      }
    });

    return valid;
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.validateReservation()) {
      let uid = (this.state.authUser != null) ? this.state.authUser.uid : '';
      db.doCreateUserReservation(uid, this.state.roomId, this.state.title, this.state.startDateTime, this.state.startDateTimeTimestamp, this.state.endDateTime, this.state.endDateTimeTimeTimestamp)
        .then((result) => {
          this.getEvents();
        })
        .catch(error => {
          console.log(error);
      });
    } else {
      alert('Overlaps with another reservation');
    }
  }
  
  handleChange (field) {
    return (e) => {
      this.setState({ [field] : e.target.value});
    }
  }

  validate (current) {
    var yesterday = moment().subtract( 1, 'day' );
    return current.isAfter( yesterday );
  }

  render() {
    return (
      <div>
        <Header />
        <div className="reserve-wrapper width-lg">
          <h2>{this.state.roomName}</h2>
          <div className="top-row width-lg">
            <div className="booking-form">
              <form method="POST" onSubmit={this.handleSubmit}>
                <label htmlFor="title">Event title/Purpose</label>
                <input type="text" name="title" onChange={this.handleChange('title')} />

                  <label htmlFor="">Start: </label>
                  <DateTime isValidDate={ this.validate } onChange={this.handleStartDateTimeChange} value={this.state.startDateTime} />

                  <label htmlFor="">End: </label>
                  <DateTime isValidDate={ this.validate } onChange={this.handleEndDateTimeChange} value={this.state.endDateTime} />
                <button className="book-cta">Book</button>
              </form>
            </div>
            <div className="room-information">
              <div className="room-photo">
                <img src="/images/room.jpg" alt="" />
              </div>
              <div className="the-room">
                <h4>{this.state.roomName}</h4>
                <p>{this.state.roomDesc}</p>
              </div>
              <div className="amenities">
                <h4>Amenities</h4>
              </div>
            </div>
          </div>
          <div className="calendar-wrapper width-lg">
            <BigCalendar
              selectable
              events={this.state.events}
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
      </div>
    );
  }
}

MakeReservation.contextTypes = {
  authUser: PropTypes.object,
};


export default MakeReservation;