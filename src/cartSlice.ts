// cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartState {
  items: Array<{ id: number; quantity: number }>
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      )
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += action.payload.quantity
      } else {
        state.items.push(action.payload)
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    }
  }
})

export const { addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer
