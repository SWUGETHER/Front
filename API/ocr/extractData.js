const extractData = async (image) => {
  const formData = new FormData();
  formData.append("file", image);

  try {
    const data = await apiClient
      .post("/image", formData, {
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
  } catch (error) {
    console.error(error);
  }
};

export default extractData;
