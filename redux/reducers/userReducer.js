// 초기 상태
const initialState = {
  userId: null,
  email: null,
  accessToken: null,
  refreshToken: null,
  isAdmin: false,
};

// Reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNIN":
      return {
        ...state,
        userId: action.userId,
        email: action.email,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
        isAdmin: action.isAdmin,
      };
    case "SIGNOUT":
      return {
        ...state,
        userId: null,
        email: null,
        accessToken: null,
        refreshToken: null,
        isAdmin: false,
      };
    case "REFRESH":
      return {
        ...state,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
      };
    default:
      return state;
  }
};

export default userReducer;
