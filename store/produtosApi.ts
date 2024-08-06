import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const produtosApi = createApi({
  reducerPath: 'produtosApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getProdutos: builder.query({
      query: () => 'produtos'
    })
  })
})

export const { useGetProdutosQuery } = produtosApi
export default produtosApi
