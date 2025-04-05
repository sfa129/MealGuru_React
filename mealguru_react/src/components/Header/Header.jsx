import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.css'; 
import { logo } from '../../assets/images';

function Header() {
  return (
    <>
      <header>
        <div className="navbar">
          <img src={logo} className='logo' />
          <div className="headings">
            <p><NavLink to='/'>Home</NavLink></p>
            <p><NavLink to='/about'>About</NavLink></p>
            <p><NavLink to='/whatwedo'>What We Do</NavLink></p>
            <p><NavLink to='/ourplans'>Our Plans</NavLink></p>
            <p><NavLink to='/faqs'>FAQs</NavLink></p>
            <p><NavLink to='/insights'>Insights</NavLink></p>
            <p><NavLink to='/contact'>Contact</NavLink></p>
          </div>

          <div className="buttons">
            <div className="button1">
              <p><NavLink to='/demo'>Start Your Demo</NavLink></p>
            </div>

            <div className="button2">
              <p><NavLink to='/login'>Login</NavLink></p>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;