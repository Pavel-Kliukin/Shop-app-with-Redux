import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const api = "https://fakestoreapi.com/products"

const initialState = {
  products: []
}

// This where async logic goes
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(api)
    const data = response.data
    data.map((product) => product.quantity = 0) // adds property "quantity" to each product and sets it as 0
    return data
  }
)

export const productsSlice = createSlice ({
  name:"products",
  initialState,
  // The 'reducers' field lets us define reducers and generate associated actions
  // This is where direct logic goes.
  reducers: {

    increaseQuantity(state, action) {
      const { id } = action.payload; // Assuming action.payload contains the product ID
      const productIndex = state.products.findIndex((product) => product.id === id);

      if (productIndex !== -1) { // if findIndex doesn't find the product with given id it returns -1, thats why we check "not equal -1"
        state.products[productIndex].quantity += 1;
      }
    },

    decreaseQuantity(state, action) {
      const { id } = action.payload; // Assuming action.payload contains the product ID
      const productIndex = state.products.findIndex((product) => product.id === id);

      if (productIndex !== -1 && state.products[productIndex].quantity > 0) {
        state.products[productIndex].quantity -= 1;
      }
    },

    QuantityToZero(state, action) {
      const { id } = action.payload; // Assuming action.payload contains the product ID
      const productIndex = state.products.findIndex((product) => product.id === id);

      if (productIndex !== -1) {
        state.products[productIndex].quantity = 0;
      }
    },
  },
  // The 'extraReducers' field lets the slice handle actions defined elswhere
  // including actions generated by createAsyncThunk or in other slices

  // This where async logic goes
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.products = []
      })
  }
})

export const { increaseQuantity } = productsSlice.actions
export const { decreaseQuantity } = productsSlice.actions
export const { QuantityToZero } = productsSlice.actions
export default productsSlice.reducer