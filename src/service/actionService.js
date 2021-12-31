import { instance } from ".";

export const likePostAction = async (blogId, uId, like) => {
  const { data } = await instance.get("/blog/like", {
    params: {
      blogId,
      uId,
      like,
    },
  });
  return data;
};
