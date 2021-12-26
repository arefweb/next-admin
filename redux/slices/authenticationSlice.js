import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hasAuthResponse: false,
  isAuth: false,
  token: ""
};

export const authenticationSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthResponse: (state, action) => {
      state.hasAuthResponse = action.payload;
    },
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

// Action creators 
export const { setAuthResponse, setIsAuth, setToken } = authenticationSlice.actions;

export default authenticationSlice.reducer;
