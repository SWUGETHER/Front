import { apiClient } from "../apiClient";
import getToken from "../../util/getToken";

const readMyPostList = async (state, dispatch) => {
  const accessToken = await getToken(state, dispatch);

  try {
    const data = await apiClient
      .get(`/mypage/post`, {
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

export default readMyPostList;
