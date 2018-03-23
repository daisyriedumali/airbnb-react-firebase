import React, { Component } from 'react';
import Header from './common/header';
import { auth, db } from '../firebase';
import { firebase } from '../firebase';
import moment from 'moment';

class MyBookings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
      bookings: null,
      past_bookings: null,
      future_bookings: null
    };

    this.fetchMyBookings = this.fetchMyBookings.bind(this);
    this.renderMyBookings = this.renderMyBookings.bind(this);
    this.onDeleteBooking = this.onDeleteBooking.bind(this);
  }

  componentWillMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      this.setState(() => ({ authUser }));
      this.fetchRooms();
      this.fetchMyBookings();
    });
  }

  fetchRooms() {
    db.onceGetRooms().then(snapshot => {
      this.setState(() => ({ rooms: snapshot.val() }));
    });
  }

  onDeleteBooking(id) {
    let uid = (this.state.authUser != null) ? this.state.authUser.uid : '';
    db.onceRemoveBooking(id)
      .then(() => {
        this.fetchMyBookings();
      })
      .catch(error => {
      });
  }

  fetchMyBookings() {
    db.onceGetBookingsByUserId(this.state.authUser.uid).then(snapshot => {
      let time_now = new Date();
      let timestamp = time_now.getTime();
      let val = snapshot.val();

      if (val != null && val != undefined && Object.keys(val).length > 0) {
        let bookings = [];
        Object.keys(val).forEach(function (id) {
          let _b = val[id];
          _b.id = id;
          bookings.push(val[id]);
        });

        bookings.sort(function (a, b) {
          return a.check_in_timestamp - b.check_in_timestamp;
        });

        let past_bookings = [];
        let future_bookings = [];
        bookings.forEach(function (booking) {
          if (timestamp > booking.check_in_timestamp) {
            past_bookings.push(booking);
          } else {
            future_bookings.push(booking);
          }
        });

        this.setState(() => ({ bookings: snapshot.val(), past_bookings: past_bookings, future_bookings: future_bookings }));
      } else {
        this.setState(() => ({ bookings: [], past_bookings: [], future_bookings: [] }));
      }

    });
  }

  renderMyBookings(type) {
    if (this.state.bookings != null) {
      let onDel = this.onDeleteBooking;
      let _this = this;
      let bookings = this.state.bookings;
      let rooms = this.state.rooms;
      let render_booking = [];

      this.state[type].forEach(function (booking) {
        let _rid = booking.room_id;

        Object.keys(rooms).forEach(function (id) {
          if (_rid == rooms[id].id) {
            render_booking.push(
              <div className="room-card">
                <div className="room-photo">
                  <img src={rooms[id].photos[1]} alt="" />
                </div>
                <h3>{rooms[id].name}</h3>
                <p className="date">{moment(booking.check_in).format('L LTS')}</p>
                <p className="time">{moment(booking.check_out).format('L LTS')}</p>
                {type == 'future_bookings' &&
                  <button className="cancel-booking" onClick={onDel.bind(_this, booking.id)}>Cancel Booking</button>}
              </div>
            );
          }
        });
      });

      if (render_booking.length == 0) {
        render_booking.push(
          <div className="room-card">
            You have no {type == 'future_bookings' ? 'Upcoming' : 'Past'} Booking
                    </div>
        );
      }
      return render_booking;
    }
  }

  render() {
    // console.log(this.state.authUser != null && this.state.authUser.uid)
    return (
      <div>
        <Header />
        <div className="bookings-wrapper width-lg">
          <h2>Upcoming Bookings</h2>
          <div className="upcoming-wrapper">
            {this.renderMyBookings('future_bookings')}
          </div>

          <hr />

          <h2>Past Bookings</h2>
          <div className="upcoming-wrapper">
            {this.renderMyBookings('past_bookings')}
          </div>
        </div>
      </div>
    );
  }
}

export default MyBookings;