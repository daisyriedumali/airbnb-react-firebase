import React, { Component } from 'react';
import Header from './common/header';

const MyBookings = ({ props }) => {
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

export default MyBookings;