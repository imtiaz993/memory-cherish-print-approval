import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ProductDetails from "../Pages/Product/ProductDetails";
import FramedPrints from "../Pages/FramedPrints/FramedPrints";
import Order from "../Pages/Order/Order";
import ScrollToTop from "../Common/ScrollToTop";

const WebRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductDetails />} />
        <Route path="/framed-prints" element={<FramedPrints />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
};

export default WebRoutes;
