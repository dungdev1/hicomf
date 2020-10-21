import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Route } from 'react-router-dom';
import LoadingBar from '../components/LoadingBar';

const ProtectedRoute = ({ component, ...args }) => (
  <Route 
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <LoadingBar active={true} />
    })}
    {...args}
  />
)

export default ProtectedRoute;