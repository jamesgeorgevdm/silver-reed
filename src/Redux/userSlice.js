import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
};

//User slice for login and logout actions
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.username = action.payload;
    },
    logout: (state) => {
      state.username = "";
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
