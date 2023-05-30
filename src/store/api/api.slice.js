import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://172.20.10.3:8000/api/v1/",
    prepareHeaders: (headers) => {
        headers.set("Content-Type", "application/json");
        headers.set("Accept", "application/json");
        return headers;
    },
});

export const apiSlice = createApi({
    reducerPath: "products/api",
    baseQuery,
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ({ productType, search }) => {
                const url =
                    productType === undefined
                        ? `products/list/`
                        : `products/list/${productType}/`;
                return search === null ? url : url + `?search=${search}`;
            },
            transformResponse: (response) => response.results,
        }),
        getProduct: builder.query({
            query: (id) => `products/${id}/`,
        }),
    }),
});

export const { useGetProductsQuery, useGetProductQuery } = apiSlice;
