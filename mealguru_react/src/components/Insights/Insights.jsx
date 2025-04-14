import React from 'react';
import './Insights.css';
import BlueBack from '../Sections/BlueBack/BlueBack'

function Insights() {
  return (
    <>
      <BlueBack page="Insights" prevPage="Home > Insights" />

      <div className='InsightSection'>
        <div className='Insight-Text'>
           <h1>Insights from the My Meal Guru Team</h1>
           <p>Explore Expert Opinions, Tips, And Trends In Nutrition And Meal Planning</p>
        </div>
        <div className='Insight-Card'>
          
        </div>
      </div>
    </>
  )
}

export default Insights