import apiClient from "./apiClient";

const userLogin = async (id_token) => {
  let userId, email, accessToken, refreshToken, isAdmin;
  try {
    await apiClient
      .post(
        "/auth/login",
        {
          id_token: id_token,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        userId = res.data.data["userId"];
        email = res.data.data["email"];
        accessToken = res.data.data["accessToken"];
        refreshToken = res.data.data["refreshToken"];
        isAdmin = res.data.data["isAdmin"];
      });

    return { userId, email, accessToken, refreshToken, isAdmin };
  } catch (error) {
    console.error(error);
  }
};

export default userLogin;
