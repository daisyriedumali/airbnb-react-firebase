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
            <div className="landing">
              <Header />
              My Bookings
              {this.renderMyBookings()}
            </div>
        );
    }
}

export default MyBookings;