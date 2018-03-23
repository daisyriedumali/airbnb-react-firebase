import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';
import Header from './common/header'

class Room extends Component {
    getPhotos() {
        let photos = this.props.room.photos;
        let img = [];
        Object.keys(photos).forEach(function(key) {
          var val = photos[key];
          img.push(<img src={val} key={key}/>);
        });

        return img;
    }

    render() {
        return (
            <div className="room-card large">
                <div className="room-photo">
                    {this.getPhotos()}
                </div>
                <h3 className="name"><Link to={`/book/${this.props.room_id}`}>{this.props.room.name}</Link></h3>
                <p className="description">{this.props.room.description}</p>
            </div>
        )
    }
}

export default Room;