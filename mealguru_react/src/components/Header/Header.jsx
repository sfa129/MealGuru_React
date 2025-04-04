import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
      Header
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/whatwedo'>What We Do</NavLink></li>
        <li><NavLink to='/ourplans'>Our Plans</NavLink></li>
        <li><NavLink to='/faqs'>FAQs</NavLink></li>
        <li><NavLink to='/insights'>Insights</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        <li><NavLink to='/demo'>Demo</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        
      </ul>
    </div>
  )
}

export default Header;