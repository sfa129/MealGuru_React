import React from 'react';
import './ImagePortionRight.css';
import { imgportionright } from '../../../assets/images';

function ImagePortionRight() {
  return (
    <>
    <div className='portion-right'>
        <div className='inner-right'>
        <div className='text-right'>
            <h2>About Us</h2>
            <p>Welcome to My Meal Guru, your trusted partner in simplifying meal planning. With our personalized recipes and meal plans, we’re here to make home-cooked meals easier and more rewarding than ever. In a world overwhelmed by convenience foods, we’re dedicated to redefining how you nourish your body. Explore how our tailored plans can revolutionize your approach to mealtime—one personalized recipe at a time.</p>
        </div>
        <div className='img-right'>
            <img src={imgportionright} alt="" />
        </div>
        </div>
    </div>
    </>
  )
}

export default ImagePortionRight