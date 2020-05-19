import React, { useState } from 'react';
import './Header.scss'
import MobileNav from './MobileNav'


const Header = () => {
    let [active, setActive] = useState(false);

    return (
        <div>
            <div className='Header'>
                <div className="logo">
                    <img src={require('../../images/logo.svg')} alt="" />
                </div>
                <nav>
                    <div className="hamburger">
                        <img onClick={() => { setActive(!active) }} src={active ? require('../../images/icon-close.svg') : require('../../images/icon-hamburger.svg')} alt="" />
                    </div>
                </nav>
            </div>
            {active && <MobileNav />}
        </div>
    );
}

export default Header;

