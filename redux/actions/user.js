export const SIGNIN = "SIGNIN";
export const SIGNOUT = "SIGNOUT";
export const REFRESH = "REFRESH";

export const signIn = (userId, email, accessToken, refreshToken, isAdmin) => {
  return {
    type: SIGNIN,
    userId: userId,
    email: email,
    accessToken: accessToken,
    refreshToken: refreshToken,
    isAdmin: isAdmin,
  };
};

export const signOut = () => {
  return { type: SIGNOUT };
};

export const refreshToken = (accessToken, refreshToken) => {
  return {
    type: REFRESH,
    accessToken: accessToken,
    refreshToken: refreshToken,
  };
};
