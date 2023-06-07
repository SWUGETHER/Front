import { apiClient } from "../apiClient";
import getToken from "../../util/getToken";

const modifyPost = async (state, dispatch, postId, title, content, images) => {
  const accessToken = await getToken(state, dispatch);
  const formData = new FormData();
  formData.append("title", title);
  formData.append("content", content);
  formData.append("images", images);

  try {
    await apiClient.patch(`/post/${postId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export default modifyPost;
