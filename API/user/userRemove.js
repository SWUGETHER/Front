import { apiClient } from "../apiClient";

const userRemove = async (state, dispatch) => {
  const accessToken = await getToken(state, dispatch);

  try {
    await apiClient.post("/user/leave", null, {
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
