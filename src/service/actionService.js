import axios from "axios";

export const likePostAction = async (blogId, uId, like) => {
  const { data } = await axios.get("/blog/like", {
    params: {
      blogId,
      uId,
      like,
    },
  });
};
