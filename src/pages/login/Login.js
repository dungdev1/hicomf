import React, { useContext } from 'react';
import { auth, provider } from '../../lib/firebase';
import { actionTypes } from '../../reducers/authReducer';
import { AuthContext } from '../../contexts/AuthContext';

import './Login.css';

import Button from '@material-ui/core/Button';

function Login() {
  const [, dispatch] = useContext(AuthContext);
  const signIn = () => {
    auth
      .signInWithPopup(provider)
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
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  )
}

export default Login;