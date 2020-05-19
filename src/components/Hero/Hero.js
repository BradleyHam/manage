import React from 'react'
import Button from '../Button/Button'
import './Hero.scss'

const Hero = () => {
    return (
        <div className='Hero'>
            <img className='Hero__background' src={require('../../images/bg-tablet-pattern.svg')} alt="" />
            <img src={require('../../images/illustration-intro.svg')} alt="" />
            <h1>  Bring everyone together to build better products.</h1>
            <p>Manage makes it
            simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
            <Button text='Get Started' />
            <img className='Hero__backgroundBottom' src={require('../../images/bg-tablet-pattern.svg')} alt="" />
        </div>
    );
}

export default Hero;