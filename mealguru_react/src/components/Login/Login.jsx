import React from 'react';
import './login.css';
import { loginimg, logo } from '../../assets/images';

function Login() {
  return (
    <>
      <div className='login'>
        <div className='login-img'>
          <img src={loginimg} alt="" />
        </div>

        <div className='login-div'>
          <div className='login-form'>
            <div className='login-logo'>
              <img src={logo} alt="logo" />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Login