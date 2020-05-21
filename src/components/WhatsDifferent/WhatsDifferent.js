import React from 'react';
import './WhatsDifferent.scss'
import Button from '../../components/Button/Button'

const WhatsDifferent = React.forwardRef((props, ref) => {
    return (
        <div className='WhatsDifferent' ref={ref}>
            <div className="WhatsDifferent__leftSide">
                <h1>Whats Different about Manage</h1>
                <p>  Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made
  for modern digital product teams.</p>
            </div>

            <div className="WhatsDifferent__rightSide">
                <div className="differentOne different">
                    <div className="reasonOne reason"><strong>  Track company-wide progress </strong> <div className="reasonBackground"></div></div>
                    <p> See how your day-to-day tasks fit into the wider vision.
                    Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger
                picture again.</p>
                </div>

                <div className="differentTwo different">
                    <div className="reasonTwo reason"><strong>  Advanced built-in reports </strong> <div className="reasonBackground"></div></div>
                    <p>  Set internal delivery estimates and track progress toward company goals. Our
  customisable dashboard helps you build out the reports you need to keep key stakeholders informed.</p>
                </div>

                <div className="differentThree different">
                    <div className="reasonThree reason"><strong> Everything you need
  in one place </strong> <div className="reasonBackground"></div></div>
                    <p>   Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage
  offers an all-in-one team productivity solution</p>
                </div>
            </div>

        </div>
    );
})

export default WhatsDifferent;