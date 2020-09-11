export const initialState = {
  user: null
}

export const actionTypes = {
  SET_USER: "SET_USER",
  REMOVE_USER: "REMOVE_USER",
};

const authReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return ({
        user: action.user
      });
    case actionTypes.REMOVE_USER:
      return ({
        user: null
      });
    default:
      return state;
  }
}

export default authReducer;