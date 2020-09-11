import React, { useContext } from 'react';

import { AuthContext } from '../contexts/AuthContext';
import { actionTypes } from '../reducers/authReducer';
import { auth } from '../lib/firebase';
import { Button } from '@material-ui/core';

import './LogoutButton.css';

function LogoutButton() {
  const [, dispatch] = useContext(AuthContext);
  
  const handleLogout = () => {
    auth.signOut().then(function() {
      dispatch({
        type: actionTypes.REMOVE_USER
      }); 
    }).catch(function(error) {
      console.error(error);
    }); 
  }

  return (
    <div className="logout">
      <Button type="submit" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  )
}

export default LogoutButton;