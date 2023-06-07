import { apiClient } from "../apiClient";
import getToken from "../../util/getToken";

const readLikeList = async (state, dispatch) => {
  const accessToken = await getToken(state, dispatch);

  try {
    const data = await apiClient
      .get(`/post/like`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        if (res) {
          return res["data"];
        }
        return res;
      });

    return data;
  } catch (error) {
    console.error(error);
  }
};

export default readLikeList;
