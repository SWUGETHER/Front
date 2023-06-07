import { apiClient } from "../apiClient";
import getToken from "../../util/getToken";

const readList = async (state, dispatch, order) => {
  const accessToken = await getToken(state, dispatch);

  try {
    const data = await apiClient
      .get(`/post`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: { order: order },
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

export default readList;
