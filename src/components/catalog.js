import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import * as routes from '../constants/routes';
import Header from './common/header'
import Room from './Room'

class Catalog extends Component {
    constructor(props) {
        super(props);

        this.state = {
          rooms        : []
        };

        this.getRooms = this.getRooms.bind(this);
    }

    componentWillMount() {
        db.onceGetRooms().then(snapshot => {
            this.setState(() => ({rooms : snapshot.val()}));
        });
    }

    getRooms(start, end) {
        let rooms = this.state.rooms;
        let roomComp = [];
        let ctr = 0;
        Object.keys(rooms).forEach(function(id) {
            if(ctr >= start && ctr < end) {
                var val = rooms[id];
                roomComp.push(<Room room={val} key={id}/>);
            }
            ctr++;
        });

        return roomComp;
    }

    render() {
        return (
            <div className='landing'>
                <Header />
                <div className="landing-wrapper width-lg">
                    <h2>Rooms</h2>
                    <div className="rooms-wrapper">
                        <div className="rooms-row">
                            {this.getRooms(0, 2)}
                        </div>
                        <div className="rooms-row">
                            {this.getRooms(2, 5)}
                        </div>
                    </div>
                    
                </div>

            </div>
        );
    }
}

export default Catalog;