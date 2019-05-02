import React from 'react';
import {Link } from 'react-router-dom'
import SignedinLinks from './SigninLinks'
import SignoutLinks from './SignoutLinks'

const NavBar = () => {
    return (
    <nav className="nav-wrapper grey darken-2">
        <div className="container">
            <Link to="/" className="brand-logo">ProjectHelper</Link>
            <SignedinLinks />
            <SignoutLinks />
        </div>
    </nav>
    )
}

export default NavBar;