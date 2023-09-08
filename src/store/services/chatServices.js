import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import env from "config";

const chatServices = createApi({
  reducerPath: "chat",
  tagTypes: "chat",
  baseQuery: fetchBaseQuery({
    baseUrl: `${env.BASE_URL}api/chat/`,
    headers: {
      "Content-Type": "application/json",
    },
  }),

  endpoints: (builder) => {
    return {
      answer: builder.mutation({
        query: (data) => {
          return {
            url: "answer",
            method: "POST",
            body: data,
          };
        },
        invalidatesTags: ["chat"],
      }),

      search: builder.mutation({
        query: (data) => {
          return {
            url: "search",
            method: "POST",
            body: data,
          };
        },
        invalidatesTags: ["chat"],
      }),
    };
  },
});

export const { useAnswerMutation, useSearchMutation } = chatServices;
export default chatServices;
