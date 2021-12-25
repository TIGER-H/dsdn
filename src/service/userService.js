import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "user/" }),
  endpoints: (builder) => ({
    getUserByAddress: builder.query({
      query: (address) => {
        return {
          url: `getUser/`,
          params: { address },
        };
      },
    }),
    registerUser: builder.mutation({
      query: (user) => {
        return {
          url: `registerUser/`,
          method: "POST",
          body: user,
        };
      },
    }),
  }),
});

export const {
  useGetUserByAddressQuery,
  useGetRandomUserQuery,
  useRegisterUserMutation,
} = userApi;
