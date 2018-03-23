import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';
import Header from './common/header'
import Room from './Room'

const Catalog = () =>
    <div className='landing'>
        <Header />
        <div className="landing-wrapper width-lg">
            <h2>Rooms</h2>
            <div className="rooms-wrapper">
                <div className="rooms-row">
                    <Room room={{id: 1, photo:'/images/room.jpg', name:'Celeste and Honor Hall', description:'Kogi'}} />
                    <Room room={{id: 2, photo:'/images/room.jpg', name:'Celeste and Honor Hall', description:'Kogi'}} />
                </div>
                <div className="rooms-row">
                    <Room room={{id: 3, photo:'/images/room.jpg', name:'Celeste and Honor Hall', description:'Kogi'}} />
                    <Room room={{id: 4, photo:'/images/room.jpg', name:'Celeste and Honor Hall', description:'Kogi'}} />
                </div>
            </div>
        </div>
    </div>

export default Catalog;