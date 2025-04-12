import React from 'react';
import BlueBack from '../Sections/BlueBack/BlueBack';
import './Ourplans.css';

function Ourplans() {
  return (
    <>
      <BlueBack page="Our Plan" prevPage="Home > Pricing" />

      <div className='plans'>
        <div className='text'>
          <h2>Choose a Plan to Get Started</h2>
          <div className='text-div'>
            <p className='text-p'>We offer a 7-day free trial so you can explore all the features of My Meal Guru, risk-free. Cancel anytime within the trial period and you won’t be charged. To begin your FREE TRIAL, click the Start Now button above.</p>
          </div>
        </div>
        <div className='offers'>
          <div className="offer-border">
            <div className='offer-top'>
              <h1>Premium Plan</h1>
              <div className='offer-yellow'>
                  <h3><span className='pakistan'>$</span> 4.99</h3>
                <p>Monthly</p>
              </div>
              <div className='offer-desc'></div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Ourplans