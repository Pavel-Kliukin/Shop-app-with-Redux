import { createSlice } from "@reduxjs/toolkit";

const initialState = [] // The array will contain only products' ids

export const cartSlice = createSlice ({
  name: "cart",
  initialState,

  reducers: {
    addToCart(state, action) {
      const id = action.payload
      if (!state.includes(id)) { // If product's ID is not in the Cart's array then we add it
        state.push(id)
      } 
    },
    removeFromCart: (state, action) => {
      const idToRemove = action.payload
      const indexToRemove = state.indexOf(idToRemove);

      if (indexToRemove !== -1) {
        state.splice(indexToRemove, 1);
      }
    }
  },

  extraReducers: (builder) => {},
})

export const { addToCart } = cartSlice.actions
export const { removeFromCart } = cartSlice.actions
export default cartSlice.reducer
