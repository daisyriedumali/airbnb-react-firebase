import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';
import Header from './common/header';
import DateTime from 'react-datetime';
import '../styles/react-datetime.css';
import moment from 'moment';
import { auth, db, firebase } from '../firebase';
import PropTypes from 'prop-types';

class MakeReservation extends Component {
  constructor(props) {
    super(props);
    var curDate = new Date();
    this.state = {
      title         : '',
      roomId        : props.params.match.params.room,
      startDateTime : curDate,
      endDateTime   : curDate,
      startDateTimeTimestamp : curDate.getTime(),
      endDateTimeTimeTimestamp : curDate.getTime()
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStartDateTimeChange = this.handleStartDateTimeChange.bind(this);
    this.handleEndDateTimeChange = this.handleEndDateTimeChange.bind(this);
    this.validate = this.validate.bind(this);
  }

  componentWillMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      this.setState(() => ({ authUser }));
    });
  }

  handleStartDateTimeChange(dateTime) {
    let date = new Date(dateTime.format('L LTS'));
    this.setState({startDateTime: date, startDateTimeTimestamp: date.getTime()});
  }

  handleEndDateTimeChange(dateTime) {
    let date = new Date(dateTime.format('L LTS'));
    this.setState({endDateTime: date, endDateTimeTimeTimestamp: date.getTime()});
  }

  handleSubmit(e) {
    e.preventDefault();
    let uid = (this.state.authUser != null) ? this.state.authUser.uid : '';
    db.doCreateUserReservation(uid, this.state.roomId, this.state.title, this.state.startDateTime, this.state.startDateTimeTimestamp, this.state.endDateTime, this.state.endDateTimeTimeTimestamp)
      .then((result) => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
    });
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
          <h2>Room Name</h2>
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
                <h4>The Room</h4>
                <p>Kogi Cosby sweater ethical squid irony disrupt, organic tote bag gluten-free XOXO wolf typewriter mixtape small batch.</p>
              </div>
              <div className="amenities">
                <h4>Amenities</h4>
              </div>
            </div>
          </div>
          <div className="calendar-wrapper width-lg"></div>
        </div>
      </div>
    );
  }
}

MakeReservation.contextTypes = {
  authUser: PropTypes.object,
};


export default MakeReservation;