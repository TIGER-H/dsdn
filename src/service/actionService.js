import axios from "axios";

export const likePostAction = async (blogId, uId, like) => {
  const { data } = await axios.get(
    "http://wengyifan.com:8080/" + "blog/like",
    {
      params: {
        blogId,
        uId,
        like,
      },
    }
  );
  return data;
};
