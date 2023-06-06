import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ProductDetails from "../Pages/Product/ProductDetails";
import FramedPrints from "../Pages/FramedPrints/FramedPrints";

const WebRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductDetails />} />
        <Route path="/framed-prints" element={<FramedPrints />} />
      </Routes>
    </BrowserRouter>
  );
};

export default WebRoutes;
