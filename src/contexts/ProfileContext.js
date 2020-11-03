import React, { createContext } from 'react';

export const ProfileContext = createContext();

function ProfileContextProvider(props) {
  return (
    <ProfileContext.Provider value={props.user}>
      {props.children}
    </ProfileContext.Provider>
  );
}

export default ProfileContextProvider;