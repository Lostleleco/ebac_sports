import { configureStore } from '@reduxjs/toolkit'
import produtosApi from './produtosApi'
import carrinhoSlice from './carrinhoSlice'

const store = configureStore({
  reducer: {
    [produtosApi.reducerPath]: produtosApi.reducer,
    carrinho: carrinhoSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(produtosApi.middleware)
})

export default store
