import React, { useState } from 'react';
import './Header.scss'
import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'
import Button from '../Button/Button'


const Header = (props) => {
    let [active, setActive] = useState(false);


    return (
        <div>
            <div className={props.intersecting ? 'Header HeaderActive' : 'Header'}>

                {/*-------- mobile header */}

                <div className="mobileHeader">
                    <div className="logo">
                        <img src={require('../../images/logo.svg')} alt="" />
                    </div>

                    <nav>
                        <div className="hamburger">
                            <img onClick={() => { setActive(!active) }} src={active ? require('../../images/icon-close.svg') : require('../../images/icon-hamburger.svg')} alt="" />
                        </div>
                    </nav>
                </div>

                {/*-------- mobile header */}
                {/*-------- desktop header */}

                <div className="desktopNav">
                    <div className="logo">
                        <img src={require('../../images/logo.svg')} alt="" />
                    </div>
                    <DesktopNav />
                    <Button text='Get Started' />
                </div>

                {/*-------- desktop header */}

            </div>
            {active && <MobileNav />}
        </div>
    );
}

export default Header;

