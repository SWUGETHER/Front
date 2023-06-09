<<<<<<< Updated upstream
import { apiClient } from "../apiClient";
import { API_BASE_URL } from "react-native-dotenv";
=======
import {apiClient} from '../apiClient';
>>>>>>> Stashed changes

const extractData = async (formData) => {
  try {
    const data = await apiClient
<<<<<<< Updated upstream
      .post(`${API_BASE_URL}/image`, formData, {
=======
      .post("http://192.168.219.103:8080/image", formData, {
>>>>>>> Stashed changes
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res) {
          return res["data"];
        }
        return res;
      });

<<<<<<< Updated upstream
    return data;
=======
      return data;
>>>>>>> Stashed changes
  } catch (error) {
    console.error(error);
  }
};

export default extractData;
