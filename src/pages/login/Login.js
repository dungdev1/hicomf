import React from 'react';
import './Login.css';
import big_logo from '../../assets/images/big_logo.png';
import LoginButton from '../../components/LoginButton';

function Login() {
  return (
    <div className="login">
      <div className="login__logo">
        <img src={big_logo} alt="Hicomf Logo" />
      </div>
      <LoginButton />
    </div>
  )
}

export default Login;