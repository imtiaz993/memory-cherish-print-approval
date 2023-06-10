import React from "react";
import { useNavigate } from "react-router-dom";

import Stepper from "../../Common/Stepper";
import Finish from "./Components/Finish";
import ProtectiveCoating from "./Components/ProtectiveCoating";
import Prints from "./Components/Prints";
import Shipping from "./Components/Shipping";

const ProductDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="lg:flex justify-between">
      <Stepper />
      <div className="lg:w-[calc(100%-360px)] lg:bg-[#FBF4E3]">
        <div className="w-11/12 xl:w-4/5 mx-auto mb-10">
          <h1 className="mt-8 lg:mt-32 mb-6 lg:mb-12 text-3xl lg:text-4xl font-semibold text-black text-center">
            2. Product Details
          </h1>
          <Finish />
          <ProtectiveCoating />
          <Prints />
          <Shipping />
          <div className="flex justify-end mt-10">
            <button
              onClick={() => {
                navigate("/framed-prints");
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
