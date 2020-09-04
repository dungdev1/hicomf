import React, { useContext } from 'react';
import './App.css';

import Login from './pages/login/Login';
import { AuthContext } from './contexts/AuthContext';

function App() {
  const [{ user }, ] =  useContext(AuthContext);
  console.log(user);
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <p>Hello, this is Home</p>
        </>
      )}
    </div>
  );
}

export default App;