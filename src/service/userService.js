import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { instance } from ".";

export const getUser = async (address) => {
  const res = await instance.get("user/getUser", {
    params: {
      address,
    },
  });
  return res.data;
};

export const registerUser = async (user) => {
  const res = await instance.post("user/registerUser", user);
  return res;
};

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://wengyifan.com:8080/" + "user/",
  }),
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
