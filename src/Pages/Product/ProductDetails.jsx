import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../redux/cartSlice";
import Stepper from "../../Common/Stepper";
import Finish from "./Components/Finish";
import ProtectiveCoating from "./Components/ProtectiveCoating";
import Prints from "./Components/Prints";
import Shipping from "./Components/Shipping";
import { useState } from "react";
import Frames from "./Components/Frames";

const ProductDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart);
  console.log(state)
  const [productDetails, setProductDetails] = useState({});

  const handleSubmit = () => {
    dispatch(updateProduct(productDetails))
    navigate("/framed-prints");
  };

  return (
    <div className="lg:flex justify-between">
      <Stepper />
      <div className="lg:w-[calc(100%-360px)] lg:bg-[#FBF4E3]">
        <div className="w-11/12 xl:w-4/5 mx-auto mb-10">
          <h1 className="mt-8 lg:mt-32 mb-6 lg:mb-12 text-3xl lg:text-4xl font-semibold text-black text-center">
            2. Product Details
          </h1>
          <Finish
            productDetails={productDetails}
            setProductDetails={setProductDetails}
          />
          <ProtectiveCoating
            productDetails={productDetails}
            setProductDetails={setProductDetails}
          />
          <Prints
            productDetails={productDetails}
            setProductDetails={setProductDetails}
          />
          <Frames
            productDetails={productDetails}
            setProductDetails={setProductDetails}
          />
          <Shipping
            productDetails={productDetails}
            setProductDetails={setProductDetails}
          />
          <div className="flex justify-end mt-10">
            <button
              onClick={() => {
                handleSubmit();
              }}
              className="bg-[#FF9728] rounded-xl text-xl text-white font-semibold py-2 lg:py-3 px-6"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
