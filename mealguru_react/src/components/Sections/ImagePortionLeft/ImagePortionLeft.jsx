import React from 'react';
import '../ImagePortionRight/ImagePortionRight.css';

function ImagePortionLeft({ img, heading, text, bgcolor }) {
    const bgColor = {
        backgroundColor: bgcolor,
    }
    return (
        <>
            <div className='portion-right' style={bgColor}>
                <div className='inner-right'>
                    <div className='img-right' style={bgColor}>
                        <img src={img} alt="" />
                    </div>
                    <div className='text-right'>
                        <h2>{heading}</h2>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImagePortionLeft