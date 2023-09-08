import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import env from "config";

const placeServices = createApi({
  reducerPath: "places",
  tagTypes: "placesOperation",
  baseQuery: fetchBaseQuery({
    baseUrl: `${env.BASE_URL}`,
    headers: {
      "Content-Type": "application/json",
    },
  }),
  endpoints: (builder) => {
    return {
      getPlaceDetail: builder.mutation({
        query: (data) => {
          return {
            url: "api/placeDetail",
            method: "POST",
            body: data,
          };
        },
        invalidatesTags: ["placesOperation"],
      }),
    };
  },
});

export const { useGetPlaceDetailMutation } = placeServices;

export default placeServices;
