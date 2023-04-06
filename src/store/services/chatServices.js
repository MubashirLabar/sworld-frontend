import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import env from "config";

const chatServices = createApi({
  reducerPath: "chat",
  tagTypes: "chat",
  baseQuery: fetchBaseQuery({
    baseUrl: `${env.BASE_URL}chat/`,
    headers: {
      "Content-Type": "application/json",
    },
  }),

  endpoints: (builder) => {
    return {
      create: builder.mutation({
        query: (data) => {
          return {
            url: "answer",
            method: "POST",
            body: data,
          };
        },
        invalidatesTags: ["chat"],
      }),
    };
  },
});

export const { useCreateMutation } = chatServices;
export default chatServices;
