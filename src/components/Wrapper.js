import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import LoadingBar from './LoadingBar';

function Wrapper({ children }) {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return <LoadingBar active={true} />
  }
  if (error) {
    return <div>Oops... {error.message}</div>
  }
  return (
    <>
      {children}
    </>
  );
}

export default Wrapper;