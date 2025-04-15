import React from 'react';
import './Contact.css';
import BlueBack from '../Sections/BlueBack/BlueBack';
import { contact } from '../../assets/images'

function Contact() {
  return (
    <>
    <BlueBack page="Contact Us" prevPage="Home > Contact Us"/>
    <div className='contact-div'>
      <div className='contact-innerDiv'>
        <div className='contact-left'>
          <h1>Contact Us</h1>
          <h4>We're Here To Listen: Ask, Suggest, Comment - Your Feedback Matters!</h4>
        </div>
        <div className='contact-right'>
          <img src={contact} alt="Contact Us" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact