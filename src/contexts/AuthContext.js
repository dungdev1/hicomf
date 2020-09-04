import React, { createContext, useReducer } from 'react';
import authReducer, { initialState } from '../reducers/authReducer';

export const AuthContext = createContext();

function AuthContextProvider(props) {
  return (
    <AuthContext.Provider value={useReducer(authReducer, initialState)}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;