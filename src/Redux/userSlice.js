// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "", // or firstName if you prefer
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.username = action.payload; // Store the first name or full username here
    },
    logout: (state) => {
      state.username = ""; // Reset username on logout
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
