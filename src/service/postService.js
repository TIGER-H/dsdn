import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { instance } from ".";

// refactor api mutation call

export const addBlog = async (post) => {
  const { data } = await instance.post("/blog/addBlog", post);
  const { id } = data.data;

  const { data: blogDetail } = await instance.get("/blog/getBlog", {
    params: {
      id,
    },
  });
  return blogDetail.data;
};

export const getPostByUserId = async (uId) => {
  const { data } = await instance.get("/blog/getBlog", {
    params: {
      uId,
    },
  });
  return data.data;
};

export const updateBlog = async (id, ipfsUrl) => {
  const { data } = await instance.post("/blog/updateBlog", {
    id,
    ipfsUrl,
  });
  return data.data;
};

export const postApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://wengyifan.com:8080/" + "blog/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (id) => {
        return {
          url: `getBlog`,
          params: { id },
        };
      },
    }),
    addPost: builder.mutation({
      query: (post) => {
        return {
          url: `addBlog/`,
          method: "POST",
          body: post,
        };
      },
    }),
  }),
});

export const { useGetPostsQuery, useAddPostMutation } = postApi;
