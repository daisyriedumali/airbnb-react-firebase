import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';
import Header from './common/header'
import Room from './Room'

const Catalog = () =>
    <div className='landing'>
        <Header />
        <h2>Rooms</h2>
        <div className="rooms-wrapper">
            <div className="rooms-row">
                <Room room={{photo:'room.jpg', name:'Celeste and Honor Hall', description:'Kogi Cosby sweater ethical squid irony disrupt, organic tote bag gluten-free XOXO wolf typewriter mixtape small batch.'}} />
                <Room room={{photo:'room.jpg', name:'Celeste and Honor Hall', description:'Kogi Cosby sweater ethical squid irony disrupt, organic tote bag gluten-free XOXO wolf typewriter mixtape small batch.'}} />
            </div>
        </div>

    </div>

export default Catalog;