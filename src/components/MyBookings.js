import React, { Component } from 'react';
import Header from './common/header';

const MyBookings = ({ props }) => {
  return (
    <div>
      <Header />
      <div className="bookings-wrapper width-lg">
        <h2>Upcoming Bookings</h2>
        <div className="upcoming-wrapper">

        </div>
      </div>
    </div>
  );
}

export default MyBookings;