import apiClient from "./apiClient";

const userLogout = async (accessToken) => {
  try {
    await apiClient.post("/auth/logout", null, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return true;
  } catch (error) {
    console.error(error);

    return false;
  }
};

export default userLogout;
