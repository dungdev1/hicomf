import React, { useContext } from 'react';
import { auth, provider } from '../../lib/firebase';
import { actionTypes } from '../../reducers/authReducer';
import { AuthContext } from '../../contexts/AuthContext';

import './Login.css';
// import F_icon  from '../../assets/images/F_icon@2x.png';
import big_logo from '../../assets/images/big_logo.png';

import Button from '@material-ui/core/Button';

import firebase from 'firebase';

function Login() {
  const [, dispatch] = useContext(AuthContext);
  const signIn = () => {
    auth
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(function() {
        return auth.signInWithPopup(provider);
      })
      .then(result => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user
        });
      })
      .catch(error => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img src={big_logo} alt="Hicomf Logo" />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  )
}

export default Login;