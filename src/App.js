import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import './App.css';

import AppRoutes from './AppRoutes';
import LoadingBar from './components/LoadingBar';

function App() {
  const { isLoading, error, user, getAccessTokenSilently } = useAuth0();

  if (user && user['https://myapp.example.com/is_new']) {
    const profileData = {
      'first_name': user.given_name,
      'last_name': user.family_name,
      'email': user.email,
      'user_avatar': user.picture,
    }
    const url = process.env.REACT_APP_SERVER_URL + '/api/v1/profiles/';
    let options = {
      audience: process.env.REACT_APP_AUTH0_AUDIENCE,
      method: 'POST',
      body: JSON.stringify(profileData),
      headers: {
        'Content-Type': 'application/json',
      }
    };
    (async () => {
      try {
        const { audience, scope, ...fetchOptions } = options;
        const accessToken = await getAccessTokenSilently({ audience, scope });
        const res = await fetch(url, {
          ...fetchOptions,
          headers: {
            ...fetchOptions.headers,
            Authorization: `Bearer ${accessToken}`,
          },
        });
        console.log(await res.json());
      } catch (error) {
        console.error(error.message);
      }
    })();
  }

  if (isLoading) {
    return <LoadingBar active={true} />;
  }
  if (error) {
    return <div>Oops... {error.message}</div>
  }

  return (
    <div className="app">
      <AppRoutes user={user} getAccessTokenSilently={getAccessTokenSilently} />
    </div>
  )
}

export default App;