import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: 0,
    name: "",
    surname: "",
    password: 0,
    email: "",
    status: false,
    isAuthenticated: false,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
