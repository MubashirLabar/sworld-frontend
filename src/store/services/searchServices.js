import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import env from "config";

const searchServices = createApi({
  reducerPath: "search",
  tagTypes: "search",
  baseQuery: fetchBaseQuery({
    baseUrl: `${env.BASE_URL}search/`,
    headers: {
      "Content-Type": "application/json",
    },
  }),
  endpoints: (builder) => {
    return {
      search: builder.mutation({
        query: (data) => {
          return {
            url: "search",
            method: "GET",
            body: data,
          };
        },
        invalidatesTags: ["chat"],
      }),
    };
  },
});

export default searchServices;
