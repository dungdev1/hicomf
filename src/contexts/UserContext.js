import React, { createContext, useReducer } from 'react';
import userReducer, { initialState } from '../reducers/userReducer';

export const UserContext = createContext();

function UserContextProvider(props) {
  return (
    <UserContext.Provider value={useReducer(userReducer, initialState)}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;