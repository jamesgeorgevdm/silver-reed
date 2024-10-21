import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
};

// Cart slice with add and remove actions
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalPrice += parseFloat(action.payload.price.replace(/R|,/g, ""));
    },
    removeFromCart: (state, action) => {
      const itemToRemove = state.items.find(
        (item) => item.id === action.payload
      );
      if (itemToRemove.quantity > 1) {
        itemToRemove.quantity -= 1;
        state.totalPrice -= parseFloat(itemToRemove.price.replace(/R|,/g, ""));
      } else {
        state.items = state.items.filter((item) => item.id !== action.payload);
        state.totalPrice -= parseFloat(itemToRemove.price.replace(/R|,/g, ""));
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
