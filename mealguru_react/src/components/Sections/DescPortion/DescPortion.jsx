import React from 'react';
import './DescPortion.css';
import {whatwedoFirst} from '../../../assets/images/index';
 
function DescPortion({ img, heading, subheading, description, button, bgColor }) {
    const styling = {
        backgroundColor: bgColor,
    }
    return (
        <>
            <div className="choose-two" style={styling}>
                <div>
                    <img src={img} alt="" className="choose-img"/>
                </div>
                <div className="choose-contents">
                    <h2>{heading}</h2>
                    <h4>{subheading}</h4>
                    <p>{description}</p>
                    <div className="choose-text-btn" style={styling}>
                        <p >{button}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DescPortion