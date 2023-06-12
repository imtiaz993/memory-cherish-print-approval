import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { value: {
    cart:{},
    product:{},
    prints:[],
    order:{}
  } },
  reducers: {
    updateCart: (state, action) => {
      state.value.cart = { ...action.payload };
    },
    updateProduct: (state, action) => {
      state.value.product = { ...action.payload };
    },
    updatePrints: (state, action) => {
      state.value.prints = [...action.payload ];
    },
    updateOrder: (state, action) => {
      state.value.order = { ...action.payload };
    },
  },
});

export const { updateCart, updateProduct, updatePrints, updateOrder } = cartSlice.actions;

export default cartSlice.reducer;
