import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store/store'

interface Product {
  id: number
  name: string
  price: number
}

interface CartState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  itens: any
  products: Product[]
}

const initialState: CartState = {
  products: [],
  itens: undefined
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload)
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      )
    }
  }
})

export const { addProduct, removeProduct } = carrinhoSlice.actions

export const selectProducts = (state: RootState) => state.carrinho.products

export default carrinhoSlice.reducer
