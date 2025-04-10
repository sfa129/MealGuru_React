import React from 'react'
import BlueBack from '../Sections/BlueBack/BlueBack';
import DescPortion from '../Sections/DescPortion/DescPortion';
import { whatwedoFirst } from '../../assets/images';

function Whatwedo() {
  return (
    <>
    <BlueBack page="What We Do" prevPage="Home > What We Do"/>
    <DescPortion img={whatwedoFirst}
                heading="What We Do"
                 subheading="We Personalize Recipes and Meal Planning"
                 description="At My Meal Guru, we’re here to redefine healthy eating by offering customized recipes and meal plans, designed just for you. With our proprietary interface, it’s simple to enter your preferences and receive a plan that fits your lifestyle. Life can change in an instant, and so can your meals—just update your preferences, and we’ll generate a new plan for you. Experience the freedom of effortless, flexible meal planning."
                 bgColor="#fff7e3"
                

    />
    </>
  )
}

export default Whatwedo