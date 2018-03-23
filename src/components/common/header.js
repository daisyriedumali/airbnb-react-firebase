import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import PropTypes from 'prop-types';

const Header = (props, { authUser }) => {
  if (typeof authUser != 'undefined') {
    return  (
        <div>
            { authUser
                ? <NavigationAuth />
                : <NavigationNonAuth />
            }
        </div>
    )
  } else {
    return null;
  }
}

Header.contextTypes = {
  authUser: PropTypes.object,
};

const NavigationAuth = () => {
    return (
        <header>
            <div className='header-wrapper'>
                <a className="app-name">Meeet.</a>
                <div>
                    
                    <Link className="link" to={routes.LANDING}>Rooms</Link>
                    <Link className="link" to={routes.MY_BOOKINGS}>My Bookings</Link>
                    <Link className="link" to={''}>Logout</Link>
                    <Link to={routes.ACCOUNT}>
                        <div className='user-icon'>
                            <img src='' />                        
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    );
}

const NavigationNonAuth = () => {
    return (
        <header>
            <div className='header-wrapper'>
                <a className="app-name">Meeet.</a>
                <div>
                   <Link className="link" to={routes.SIGN_IN}>Sign In</Link>
                   <Link className="link" to={routes.SIGN_UP}>Sign Up</Link>
                   <div className='user-icon'><img src='' /></div>
                </div>
            </div>
        </header>
    );
}
export default Header;