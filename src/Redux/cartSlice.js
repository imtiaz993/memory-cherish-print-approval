import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { value: {
    cart:{},
    product:{},
    framedPrints:[],
    order:{}
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
    updateOrder: (state, action) => {
      state.value.order = { ...action.payload };
    },
  },
});

export const { updateCart, updateProduct, updateFramedPrints, updateOrder } = cartSlice.actions;

export default cartSlice.reducer;
