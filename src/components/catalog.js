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
                    <Room room={{photo:'room.jpg', name:'Celeste and Honor Hall', description:'Kogi'}}/>
                    <Room room={{photo:'room.jpg', name:'Celeste and Honor Hall', description:'Kogi'}}/>
                </div>
                <div className="rooms-row">
                    <Room room={{photo:'room.jpg', name:'Celeste and Honor Hall', description:'Kogi'}}/>
                    <Room room={{photo:'room.jpg', name:'Celeste and Honor Hall', description:'Kogi'}}/>
                </div>
            </div>
            
        </div>

    </div>

export default Catalog;