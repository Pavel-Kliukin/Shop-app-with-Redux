import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  // total: 0,
}

export const cartSlice = createSlice ({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload]
    },
    removeItemFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id)
    }
  },
  extraReducers: (builder) => {},
})

export const { addToCart } = cartSlice.actions
export const { removeItemFromCart } = cartSlice.actions
export default cartSlice.reducer
