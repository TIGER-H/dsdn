import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const postApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({ baseUrl: "blog/" }),
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
