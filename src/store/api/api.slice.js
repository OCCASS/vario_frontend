import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const baseQuery = fetchBaseQuery({
  baseUrl: "http://127.0.0.1:8000/api/v1/",
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "application/json")
    headers.set("Accept", "application/json")
    return headers
  },
})

export const apiSlice = createApi({
  reducerPath: "news/api",
  baseQuery,
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `products/`,
    }),
    getProduct: builder.query({
      query: (id) => `products/${id}/`
    })
  }),
})

export const {
  useGetProductsQuery,
  useGetProductQuery,
} = apiSlice
