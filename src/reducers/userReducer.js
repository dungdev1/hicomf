export const initialState = {
  userInfor: {}
}

export const actionTypes = {
  LOAD_USERDATA: "LOAD_USERDATA",
};

const userReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOAD_USERDATA:
      console.log("run reducer");
      (async () => {
        const url = process.env.REACT_APP_SERVER_URL + '/api/v1/user/';
        try {
          const accessToken = action.payload['accessToken'];
          const res = await fetch(url, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          if (res.ok) {
            const data = await res.json();
            return ({
              userInfor: data
            });
          } else if (res.status === 404) {
            return state;
          }
        } catch (error) {
          return state;
        }
      })();
    default:
      return state;
  }
}

export default userReducer;