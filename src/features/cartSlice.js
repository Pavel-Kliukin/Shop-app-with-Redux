import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const cartSlice = createSlice ({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
        if (!state.includes(action.payload)) {
          state.push(action.payload)
        } 
      },
    removeItemFromCart: (state, action) => {
        const index = state.findIndex(
            (product) => product.title === action.payload.title
          );
          if (index !== -1) {
            if (state[index].quantity === 1) {
              state.splice(index, 1);
            }
          }
    }
  },
  extraReducers: (builder) => {},
})

export const { addToCart } = cartSlice.actions
export const { removeItemFromCart } = cartSlice.actions
export default cartSlice.reducer
