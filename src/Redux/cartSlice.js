import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { value: {
    cart:{},
    product:{},
    framedPrints:{}
  } },
  reducers: {
    updateCart: (state, action) => {
      state.value.cart = { ...action.payload };
    },
    updateProduct: (state, action) => {
      state.value.product = { ...action.payload };
    },
    updateFramedPrints: (state, action) => {
      state.value.framedPrints = { ...action.payload };
    },
  },
});

export const { updateCart, updateProduct, updateFramedPrints } = cartSlice.actions;

export default cartSlice.reducer;
