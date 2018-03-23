import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';
import Header from './common/header'

const Room = (room) =>
    <div className="room-card">
        <div className="room-photo">
            <img src="/../images/room.jpg" alt="" />
        </div>
        <h3 className="name">Celeste and Honor Hall</h3>
        <p className="description">Kogi Cosby sweater ethical squid irony disrupt, organic tote bag gluten-free XOXO wolf typewriter mixtape small batch. </p>
    </div>
export default Room;