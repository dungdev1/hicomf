import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Button } from '@material-ui/core';

import './AuthButton.css';

function LogoutButton() {
  const { isAuthenticated, logout } = useAuth0();

  return isAuthenticated && (
    <div className="logout-button">
      <Button 
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Logout
      </Button>
    </div>
  );
}

export default LogoutButton;