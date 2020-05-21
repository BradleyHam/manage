import React, { useEffect, useState } from 'react'
import Slider from 'infinite-react-carousel'
import './Testimonials.scss'


const Testimonials = () => {
    const [slidesAmount, setSlidesAmount] = useState(window.innerWidth > 930 ? 3 : 1);

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth > 930) {
                setSlidesAmount(3)
            } else {
                setSlidesAmount(1)
            }
        })
    }, [])

    return (
        <div className='Testimonials'>
            <h1>What they've said</h1>

            <Slider dots arrows={false} autoplay={true} slidesToShow={slidesAmount}>
                <div className='testimonialSlideContainer'>
                    <div className='testimonialOne testimonialSlide'>
                        <img src={require('../../images/avatar-ali.png')} alt="" />
                        <h3> Ali Bravo</h3>
                        <p> “We have been
                            able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is
                            much more focused.”</p>
                    </div>
                </div>
                <div className='testimonialSlideContainer'>
                    <div className='testimonialTwo testimonialSlide'>
                        <img src={require('../../images/avatar-anisha.png')} alt="" />
                        <h3>Anisha Li</h3>
                        <p>“Manage has supercharged our team’s workflow.
                            The ability to maintain visibility on larger milestones at all times keeps everyone motivated.” </p>
                    </div>
                </div>
                <div className='testimonialSlideContainer'>
                    <div className='testimonialThree testimonialSlide'>
                        <img src={require('../../images/avatar-richard.png')} alt="" />
                        <h3> Richard Watts</h3>
                        <p>“Manage allows us to provide structure and process. It keeps us organized and focused.
  I can’t stop recommending them to everyone I talk to!” </p>
                    </div>
                </div>
                <div className='testimonialSlideContainer'>
                    <div className='testimonialFour testimonialSlide'>
                        <img src={require('../../images/avatar-shanai.png')} alt="" />
                        <h3>Shanai Gough </h3>
                        <p>“Their software allows us to track, manage and collaborate
  on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”</p>
                    </div>
                </div>

            </Slider>
        </div>
    );
}

export default Testimonials;