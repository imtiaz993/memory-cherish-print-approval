import React from "react";
import Recommended from "../../../Assets/images/Recomended.png";

const ProtectiveCoating = ({ productDetails, setProductDetails }) => {
  return (
    <div>
      <div>
        <p className="mt-6 lg:mt-16 text-lg lg:text-xl font-bold max-w-[627px]">
          Would you like to add a protective coating to your prints to make them
          fade-proof?
        </p>
        <img className="mt-5" src={Recommended} alt="" />
        <div className="mt-4">
          <div className=" shadow-mobile-card  lg:shadow-none bg-white rounded-xl py-2 px-3">
            <label className="flex text-sm lg:text-base font-medium cursor-pointer">
              <input
                checked={productDetails.protectiveCoating === true}
                onClick={() => {
                  setProductDetails({
                    ...productDetails,
                    protectiveCoating: true,
                  });
                }}
                type="radio"
                className="mt-0.5 cursor-pointer "
              />
              <span className="w-[calc(100%-20px)] ml-5">
                Yes! Please coat all of the prints I ordered! [MOST POPULAR,
                only $9 per print]
              </span>
            </label>
          </div>
          <div className=" shadow-mobile-card  lg:shadow-none mt-2 bg-white rounded-xl py-2 px-3">
            <label className="flex text-sm lg:text-base font-medium cursor-pointer">
              <input
                checked={productDetails.protectiveCoating === false}
                onClick={() => {
                  setProductDetails({
                    ...productDetails,
                    protectiveCoating: false,
                  });
                }}
                type="radio"
                className="mt-0.5 cursor-pointer "
              />
              <span className="ml-5">No thanks.</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtectiveCoating;
