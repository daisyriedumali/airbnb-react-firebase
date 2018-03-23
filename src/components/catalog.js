import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';

const Catalog = () =>
    <div className='landing'>
        <header>
            <div className='header-wrapper'>
                <a className="app-name">Meeet.</a>
                <div>
                    <a className="link">Rooms</a>
                    <a className="link">My Bookings</a>
                    <a className="link">Log Out</a>
                    <div className='user-icon'><img src='' /></div>
                </div>
            </div>
        </header>
        <h2>Rooms</h2>
        <div className="rooms-wrapper">
            <div className="rooms-row">
                <div className="room-card">
                    <div className="room-photo">
                        <img src="/images/room.jpg" alt="" />
                    </div>
                    <h3 className="name">Celeste and Honor Hall</h3>
                    <p className="description">Kogi Cosby sweater ethical squid irony disrupt, organic tote bag gluten-free XOXO wolf typewriter mixtape small batch. </p>
                </div>
                <div className="room-card">
                    <div className="room-photo">
                        <img src="/../images/room.jpg" alt="" />
                    </div>
                    <h3 className="name">Celeste and Honor Hall</h3>
                    <p className="description">Kogi Cosby sweater ethical squid irony disrupt, organic tote bag gluten-free XOXO wolf typewriter mixtape small batch. </p>
                </div>
            </div>z
        </div>

    </div>

export default Catalog;