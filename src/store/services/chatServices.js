import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import env from "config";

const chatServices = createApi({
  reducerPath: "chat",
  tagTypes: "chat",
  baseQuery: fetchBaseQuery({
    baseUrl: env.BASE_URL,
    // prepareHeaders: (headers, { getState }) => {
    //   const reducers = getState();
    //   const token = reducers?.authReducer?.adminToken;
    //   headers.set("authorization", token ? `Bearer ${token}` : "");
    //   return headers;
    // },
  }),

  endpoints: (builder) => {
    return {
      create: builder.mutation({
        query: (data) => {
          return {
            url: "createMessage",
            method: "POST",
            body: data,
          };
        },
        invalidatesTags: ["chat"],
      }),

      //   updateCategory: builder.mutation({
      //     query: (data) => {
      //       return {
      //         url: `/update-category/${data.id}`,
      //         method: "PUT",
      //         body: { name: data.name },
      //       };
      //     },
      //     invalidatesTags: ["categories"],
      //   }),

      //   deleteCategory: builder.mutation({
      //     query: (id) => {
      //       return {
      //         url: `/delete-category/${id}`,
      //         method: "DELETE",
      //       };
      //     },
      //     invalidatesTags: ["categories"],
      //   }),

      //   get: builder.query({
      //     query: (page) => {
      //       return {
      //         url: `categories/${page}`,
      //         method: "GET",
      //       };
      //     },
      //     providesTags: ["categories"],
      //   }),

      //   fetchCategory: builder.query({
      //     query: (id) => {
      //       return {
      //         url: `/fetch-category/${id}`,
      //         method: "GET",
      //       };
      //     },
      //     providesTags: ["categories"],
      //   }),

      //   allCategories: builder.query({
      //     query: () => {
      //       return {
      //         url: "allcategories",
      //         method: "GET",
      //       };
      //     },
      //   }),
    };
  },
});

export const {
  useCreateMutation,
  //   useGetQuery,
  //   useFetchCategoryQuery,
  //   useUpdateCategoryMutation,
  //   useDeleteCategoryMutation,
  //   useAllCategoriesQuery,
} = chatServices;
export default chatServices;
