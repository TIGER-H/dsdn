export const imageUpload = async (file) => {
  const formData = new FormData();
  formData.append("image", file, file.name);

  const requestOptions = {
    method: "POST",
    body: formData,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      "http://wengyifan.com:8080/" + "image/uploadImage",
      requestOptions
    );
    const { data } = await response.json();
    return data.imageUrl;
  } catch (err) {
    console.log(err);
  }
};
