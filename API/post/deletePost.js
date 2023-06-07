import { apiClient } from "../apiClient";
import getToken from "../../util/getToken";

const deletePost = async (state, dispatch, postId) => {
  const accessToken = await getToken(state, dispatch);

  try {
    await apiClient.delete(`/post/${postId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export default deletePost;
