import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';
import Header from './common/header'

const Catalog = () =>
    <div className='landing'>
        <Header />
        <div className="landing-wrapper width-lg">
            <h2>Rooms</h2>
            <div className="rooms-wrapper">
                <div className="rooms-row">
                    <div className="room-card large">
                        <div className="room-photo">
                            <img src="/images/room.jpg" alt="" />
                        </div>
                        <h3 className="name">Celeste and Honor Hall</h3>
                        <p className="description">Kogi Cosby sweater ethical squid irony disrupt, organic tote bag gluten-free XOXO wolf typewriter mixtape small batch. </p>
                    </div>
                    <div className="room-card large">
                        <div className="room-photo">
                            <img src="/images/room.jpg" alt="" />
                        </div>
                        <h3 className="name">Celeste and Honor Hall</h3>
                        <p className="description">Kogi Cosby sweater ethical squid irony disrupt, organic tote bag gluten-free XOXO wolf typewriter mixtape small batch. </p>
                    </div>
                </div>

                <div className="rooms-row">
                    <div className="room-card small">
                        <div className="room-photo">
                            <img src="/images/room.jpg" alt="" />
                        </div>
                        <h3 className="name">Celeste and Honor Hall</h3>
                        <p className="description">Kogi Cosby sweater ethical squid irony disrupt, organic tote bag gluten-free XOXO wolf typewriter mixtape small batch. </p>
                    </div>
                    <div className="room-card small">
                        <div className="room-photo">
                            <img src="/images/room.jpg" alt="" />
                        </div>
                        <h3 className="name">Celeste and Honor Hall</h3>
                        <p className="description">Kogi Cosby sweater ethical squid irony disrupt, organic tote bag gluten-free XOXO wolf typewriter mixtape small batch. </p>
                    </div>
                    <div className="room-card small">
                        <div className="room-photo">
                            <img src="/images/room.jpg" alt="" />
                        </div>
                        <h3 className="name">Celeste and Honor Hall</h3>
                        <p className="description">Kogi Cosby sweater ethical squid irony disrupt, organic tote bag gluten-free XOXO wolf typewriter mixtape small batch. </p>
                    </div>
                </div>
            </div>
        </div>

    </div>

export default Catalog;