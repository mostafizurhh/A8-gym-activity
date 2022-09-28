import React from 'react';
import './Header.css'
import logo from './images__1_-removebg-preview.png'
const Header = () => {
    return (
        <div className='header'>
            <img className='img-fluid' src={logo} alt="" />
            <h2>Be Fit</h2>
            <img className='img-fluid' src={logo} alt="" />
        </div>
    );
};

export default Header;