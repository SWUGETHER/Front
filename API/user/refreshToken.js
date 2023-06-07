import { apiClient } from "../apiClient";

const refreshToken = async (accessToken, refreshToken) => {
  let newAccessToken, newRefreshToken;
  try {
    await apiClient
      .post("/user/refresh", null, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Refresh: `Bearer ${refreshToken}`,
        },
      })
      .then((res) => {
        newAccessToken = res.data.data["accessToken"];
        newRefreshToken = res.data.data["refreshToken"];
      });

    return { newAccessToken, newRefreshToken };
  } catch (error) {
    console.error(error);
  }
};

export default refreshToken;
