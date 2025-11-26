// src/store/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
  _id: string;
  name: string;
  slug: string;
  price?: number | null;
  image?: string | null;
  quantity: number;
};

type CartState = {
  items: Record<string, CartItem>; // keyed by _id or slug
};

const initialState: CartState = {
  items: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
      const payload = action.payload;
      const key = payload._id ?? payload.slug;
      if (!key) return;

      const existing = state.items[key];
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items[key] = { ...payload, quantity: 1 };
      }
    },
    incrementQuantity: (state, action: PayloadAction<{ id: string }>) => {
      const item = state.items[action.payload.id];
      if (item) item.quantity += 1;
    },
    decrementQuantity: (state, action: PayloadAction<{ id: string }>) => {
      const item = state.items[action.payload.id];
      if (item) {
        item.quantity -= 1;
        if (item.quantity <= 0) delete state.items[action.payload.id];
      }
    },
    removeItem: (state, action: PayloadAction<{ id: string }>) => {
      delete state.items[action.payload.id];
    },
    clearCart: (state) => {
      state.items = {};
    },
  },
});

export const {
  addItem,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  clearCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

// selector helpers
export const selectCartItems = (state: { cart: CartState }) => state.cart.items;
export const selectCartCount = (state: { cart: CartState }) =>
  Object.values(state.cart.items).reduce((s, it) => s + it.quantity, 0);

export default cartSlice;
