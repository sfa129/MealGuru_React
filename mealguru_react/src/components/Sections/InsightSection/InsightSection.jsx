import React from 'react';
import './InsightSection.css';

function InsightSection({ img }) {
  return (
    <>
      <div className='insight-card'>
        <div className='inside-card'>
            <img src={img} alt="" />
        </div>
      </div>
    </>
  )
}

export default InsightSection