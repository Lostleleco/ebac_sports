import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.example.com' }),
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fetchProducts: builder.query<any, void>({
      query: () => 'products'
    })
  })
})

export const { useFetchProductsQuery } = api
