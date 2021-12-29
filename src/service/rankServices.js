import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const rankApi = createApi({
  reducerPath: "rankApi",
  baseQuery: fetchBaseQuery({ baseUrl: "ranklist/" }),
  endpoints: (builder) => ({
    getRankList: builder.query({
      query: (num) => {
        return {
          url: `likeList/`,
          params: { num },
        };
      },
    }),
  }),
});

export const { useGetRankListQuery } = rankApi;
