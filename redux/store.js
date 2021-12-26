import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import authReducer from "./slices/authenticationSlice";


function storeHandler() {
  return configureStore({
    reducer: {
      authReducer,
    },
  });
}

export const storeWrapper = createWrapper(storeHandler);
