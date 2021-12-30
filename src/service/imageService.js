import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const imageApi = createApi({
  reducerPath: "imageApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://wengyifan.com:8080/" + "image/" }),
  endpoints: (builder) => ({
    uploadImage: builder.mutation({
      query: (file) => {
        let formData = new FormData();
        formData.append("file", file, file.name);
        console.log(formData);

        return {
          url: "uploadImage",
          method: "POST",
          body: formData,
        };
      },
    }),
    getImage: builder.query({
      query: (id) => {
        return {
          url: `getImage/`,
          params: { id },
        };
      },
    }),
  }),
});

export const { useGetImageQuery, useUploadImageMutation } = imageApi;
