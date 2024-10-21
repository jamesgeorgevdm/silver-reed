import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

// Products slice for managing color selection
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    selectColor: (state, action) => {
      const { productId, color } = action.payload;
      state[productId] = color;
    },
  },
});

export const { selectColor } = productsSlice.actions;
export default productsSlice.reducer;
