import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: {
      cart: {},
      product: {
        finish: "Matte Finish",
        protectiveCoating: true,
        frames: true,
        shippingTime: "normal",
        morePhotos: false,
      },
      prints: [],
      order: {},
      fetchedInfo: [],
    },
  },
  reducers: {
    updateCart: (state, action) => {
      state.value.cart = { ...action.payload };
    },
    updateProduct: (state, action) => {
      state.value.product = { ...action.payload };
    },
    updatePrints: (state, action) => {
      state.value.prints = [...action.payload];
    },
    updateOrder: (state, action) => {
      state.value.order = { ...action.payload };
    },
    updateFetchedInfo: (state, action) => {
      state.value.fetchedInfo = [ ...action.payload ];
    },
  },
});

export const {
  updateCart,
  updateProduct,
  updatePrints,
  updateOrder,
  updateFetchedInfo,
} = cartSlice.actions;

export default cartSlice.reducer;
