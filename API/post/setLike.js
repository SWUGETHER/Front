import { apiClient } from "../apiClient";
import getToken from "../../util/getToken";

const setLike = async (state, dispatch, postId) => {
  const accessToken = await getToken(state, dispatch);

  try {
    await apiClient.post(`/post/like/${postId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export default setLike;
