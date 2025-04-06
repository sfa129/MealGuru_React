import React from 'react';
import './DescPortion.css';

function DescPortion({ heading, subheading, description, button }) {
    return (
        <>
            <div className="choose-two">
                <div className="choose-img"></div>
                <div className="choose-contents">
                    <h2>{heading}</h2>
                    <h4>{subheading}</h4>
                    <p>{description}</p>
                    <div className="choose-text-btn">
                        <p>{button}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DescPortion