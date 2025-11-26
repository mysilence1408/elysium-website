// src/store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// TS types for hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
