import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import PropTypes from 'prop-types';
import { firebase } from '../../firebase';

const Header = (props, { authUser }) => {
    if (typeof authUser != 'undefined') {
        return (
            <div>
                {authUser
                    ? <NavigationAuth />
                    : <NavigationNonAuth />
                }
            </div>
        )
    }
    return null;
}

Header.contextTypes = {
    authUser: PropTypes.object,
};

const NavigationAuth = () => {
    const logout = (e) => {
        e.preventDefault();
        firebase.auth.signOut().then(function() {
            window.location.href = routes.LANDING;
        }, function(error) {
            console.log(error);
        });
    }

    return (
        <header>
            <div className='header-wrapper'>
                <a className="app-name">Meeet.</a>
                <div>

                    <Link className="link" to={routes.LANDING}>Rooms</Link>
                    <Link className="link" to={routes.MY_BOOKINGS}>My Bookings</Link>
                    <a className="link" onClick={logout}> Logout </a>
                    <Link to={routes.ACCOUNT}>
                        <div className='user-icon'><img src='/images/user-avatar-large.png' /></div>
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
                    <Link className="link" to={routes.SIGN_IN}>Log In</Link>
                    <Link className="link" to={routes.SIGN_UP}>Sign Up</Link>
                    <div className='user-icon'><img src='/images/user-avatar-large.png' /></div>
                </div>
            </div>
        </header>
    );
}
export default Header;