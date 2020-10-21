import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Button } from '@material-ui/core';
import './AuthButton.css';

function LoginButton() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return !isAuthenticated && (
    <div className="login-button">
      <Button onClick={loginWithRedirect}>
        Login
      </Button>
    </div>
  );
}

export default LoginButton;