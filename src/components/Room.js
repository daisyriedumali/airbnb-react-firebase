import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';
import Header from './common/header'

const Room = ({room}) =>
    <div className="room-card large">
        <div className="room-photo">
            <img src={room.photo} alt="" />
        </div>
        <h3 className="name"><Link to={`/book/${room.id}`}>{room.name}</Link></h3>
        <p className="description">{room.description}</p>
    </div>   
export default Room;