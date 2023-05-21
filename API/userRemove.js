import apiClient from "./apiClient";

const userRemove = async (accessToken) => {
  try {
    await apiClient.post("/auth/leave", null, {
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

export default userRemove;
