import React, { Component } from 'react';
import Header from './common/header';
import { auth, db } from '../firebase';
import { firebase } from '../firebase';

class MyBookings extends Component {
    constructor(props) {
        super(props);

        this.state = {
          authUser     : null,
          bookings     : null,
        };

        this.fetchMyBookings  = this.fetchMyBookings.bind(this);
        this.renderMyBookings = this.renderMyBookings.bind(this);
    }

    componentWillMount() {
        firebase.auth.onAuthStateChanged(authUser => {
            this.setState(() => ({ authUser }));
            this.fetchMyBookings();
        });
    }

    fetchMyBookings() {
        db.onceGetBookingsByUserId(this.state.authUser.uid).then(snapshot => {
            this.setState(() => ({bookings : snapshot.val()}));
        });
    }

    renderMyBookings() {

    }

    render() {
        return (
            <div>
              <Header />
              <div className="bookings-wrapper width-lg">
                <h2>Upcoming Bookings</h2>
                <div className="upcoming-wrapper">
                  <div className="room-card">
                    <div className="room-photo">
                      <img src="/images/room.jpg" alt="" />
                    </div>
                    <h3>Room Name</h3>
                    <p className="date">March 24, 2018</p>
                    <p className="time">10:00AM - 11:30AM</p>
                  </div>
                  <div className="room-card">
                    <div className="room-photo">
                      <img src="/images/room.jpg" alt="" />
                    </div>
                    <h3>Room Name</h3>
                    <p className="date">March 24, 2018</p>
                    <p className="time">10:00AM - 11:30AM</p>
                  </div>
                  <div className="room-card">
                    <div className="room-photo">
                      <img src="/images/room.jpg" alt="" />
                    </div>
                    <h3>Room Name</h3>
                    <p className="date">March 24, 2018</p>
                    <p className="time">10:00AM - 11:30AM</p>
                  </div>
                  <div className="room-card">
                    <div className="room-photo">
                      <img src="/images/room.jpg" alt="" />
                    </div>
                    <h3>Room Name</h3>
                    <p className="date">March 24, 2018</p>
                    <p className="time">10:00AM - 11:30AM</p>
                  </div>
                </div>
                <hr />
                <h2>Past Bookings</h2>
                <div className="upcoming-wrapper">
                  <div className="room-card">
                    <div className="room-photo">
                      <img src="/images/room.jpg" alt="" />
                    </div>
                    <h3>Room Name</h3>
                    <p className="date">March 24, 2018</p>
                    <p className="time">10:00AM - 11:30AM</p>
                  </div>
                  <div className="room-card">
                    <div className="room-photo">
                      <img src="/images/room.jpg" alt="" />
                    </div>
                    <h3>Room Name</h3>
                    <p className="date">March 24, 2018</p>
                    <p className="time">10:00AM - 11:30AM</p>
                  </div>
                  <div className="room-card">
                    <div className="room-photo">
                      <img src="/images/room.jpg" alt="" />
                    </div>
                    <h3>Room Name</h3>
                    <p className="date">March 24, 2018</p>
                    <p className="time">10:00AM - 11:30AM</p>
                  </div>
                  <div className="room-card">
                    <div className="room-photo">
                      <img src="/images/room.jpg" alt="" />
                    </div>
                    <h3>Room Name</h3>
                    <p className="date">March 24, 2018</p>
                    <p className="time">10:00AM - 11:30AM</p>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default MyBookings;