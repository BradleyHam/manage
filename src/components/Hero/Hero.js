import React from 'react'
import Button from '../Button/Button'
import './Hero.scss'
import illustration from '../../images/illustration-intro.svg'
import bgTabletPattern from '../../images/bg-tablet-pattern.svg'

const Hero = () => {
    return (
        <div className='Hero'>
            <div className='Hero__imgSide'>
                <img className='Hero__background' src={bgTabletPattern} alt="" />
                <img src={illustration} alt="" />
            </div>
            <div className='Hero__textSide'>
                <h1>  Bring everyone together to build better products.</h1>
                <p>Manage makes it
            simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
                <Button text='Get Started' />
                <img className='Hero__backgroundBottom' src={require('../../images/bg-tablet-pattern.svg')} alt="" />
            </div>
        </div>
    );
}

export default Hero;