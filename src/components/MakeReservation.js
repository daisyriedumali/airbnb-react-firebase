import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';
import Header from './common/header'

const MakeReservation = props => (

  <div>
    <Header />
    <div className="reserve-wrapper width-lg">
      <h2>Room Name</h2>
      <div className="top-row width-lg">
        <div className="booking-form">
          <form action="">
            <label htmlFor="">Date</label>
            <input type="date" />

            <label htmlFor="">Time</label>
            <input type="time" />

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

export default MakeReservation;