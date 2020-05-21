import React from 'react';
import './Simplify.scss'

const Simplify = () => {
    return (
        <div className="Simplify">
            <h1>Simplify how your team works today</h1>
            <button className="secondaryButton">Get Started</button>
            <img className='Simplify__mobileImage' src={require('../../images/bg-simplify-section-mobile.svg')} alt="" />
            <img className='Simplify__desktopImage' src={require('../../images/bg-simplify-section-desktop.svg')} alt="" alt="" />
        </div>
    );
}

export default Simplify;