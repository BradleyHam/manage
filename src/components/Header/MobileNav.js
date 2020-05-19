import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap'

const MobileNav = () => {

    let nav = useRef(null);

    useEffect(() => {

        gsap.to(nav, { opacity: 1, duration: .4, ease: 'easIn', y: '10' });
        gsap.to(nav.children, { opacity: 1, duration: .5, ease: 'easIn', stagger: '.2', x: '-20' });


    }, [])



    return (
        <ul ref={el => (nav = el)} className="mobileNav">
            <li>Pricing</li>
            <li>Product</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Community</li>
        </ul>
    );
}

export default MobileNav;