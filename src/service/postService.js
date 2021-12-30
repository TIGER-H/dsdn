import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import axios from "axios";

// refactor api mutation call

export const addBlog = async (post) => {
  const { data } = await axios.post(
    "http://wengyifan.com:8080/" + "blog/addBlog",
    post
  );
  const { id } = data.data;

  const { data: blogDetail } = await axios.get(
    "http://wengyifan.com:8080/" + "blog/getBlog",
    {
      params: {
        id,
      },
    }
  );
  return blogDetail.data;
};

export const getPostByUserId = async (uId) => {
  const { data } = await axios.get("http://wengyifan.com:8080/" + "blog/getBlog", {
    params: {
      uId,
    },
  });
  return data.data;
};

export const updateBlog = async (id, ipfsUrl) => {
  const { data } = await axios.post("http://wengyifan.com:8080/" + "blog/updateBlog", {
    id,
    ipfsUrl,
  });
  return data.data;
};

export const postApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://wengyifan.com:8080/" + "blog/" }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (id) => {
        return {
          url: `getBlog/`,
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
