import axios from "axios";

export const likePostAction = async (blogId, uId, like) => {
  const { data } = await axios.get(process.env.baseUrl + "/blog/like", {
    params: {
      blogId,
      uId,
      like,
    },
  });
  return data;
};
