import React, { useState } from "react";
import CheckIcon from "../../../Assets/icons/black-check.svg";
import MorePhotos from "./MorePhotos";
import UrgentPolicy from "./UrgentPolicy";

const Shipping = ({ productDetails, setProductDetails }) => {
  const [time, setTime] = useState("");
  return (
    <>
      <div>
        <p className="mt-5 lg:mt-10 text-lg lg:text-xl font-bold">
          Do you require express shipping?
        </p>
        <div className="grid lg:grid-cols-3 gap-0 lg:gap-6">
          <div className="mt-4 bg-white rounded-xl py-2 border-2 border-[#767676]">
            <label className="flex items-start text-base font-medium cursor-pointer px-1 pb-2 lg:min-h-[80px]">
              <input
                checked={productDetails.shippingTime === "normal"}
                onClick={() => {
                  setProductDetails({
                    ...productDetails,
                    shippingTime: "normal",
                  });
                }}
                type="radio"
                className="cursor-pointer mt-2 ml-1"
              />
              <span className="w-[calc(100%-20px)] ml-2">
                No thanks, I can wait 5-8 days for my prints to arrive
              </span>
            </label>
            <p className="border-t border-[#767676] px-3 flex py-2">
              <img src={CheckIcon} className="mr-2" alt="" />
              No additional cost*
            </p>
          </div>
          <div className="mt-4 bg-white rounded-xl py-2 border-2 border-[#767676]">
            <label className="flex items-start text-base font-medium cursor-pointer px-1 pb-2 lg:min-h-[80px]">
              <input
                checked={productDetails.shippingTime === "urgent"}
                onClick={() => {
                  setProductDetails({
                    ...productDetails,
                    shippingTime: "urgent",
                  });
                }}
                type="radio"
                className="cursor-pointer mt-2 ml-1"
              />
              <span className="w-[calc(100%-20px)] ml-2">
                Yes please, I need my prints to arrive within 3 days. Use
                express shipping
              </span>
            </label>
            <p className="border-t border-[#767676] px-3 flex py-2">
              <img src={CheckIcon} className="mr-2" alt="" />
              $29 additionally*
            </p>
          </div>
          <div className="mt-4 bg-white rounded-xl py-2 border-2 border-[#767676]">
            <label className="flex items-start text-base font-medium cursor-pointer px-1 pb-2 lg:min-h-[80px]">
              <input
                checked={productDetails.shippingTime === "most-urgent"}
                onClick={() => {
                  setProductDetails({
                    ...productDetails,
                    shippingTime: "most-urgent",
                  });
                }}
                type="radio"
                className="cursor-pointer mt-2 ml-1"
              />
              <span className="w-[calc(100%-20px)] ml-2">
                I need my prints to arrive within 24 hours guaranteed.
              </span>
            </label>
            <p className="border-t border-[#767676] px-3 flex py-2">
              <img src={CheckIcon} className="mr-2" alt="" />
              Only select if absolutely necessary*
            </p>
          </div>
        </div>
      </div>
      {productDetails.shippingTime === "most-urgent" && (
        <UrgentPolicy
          productDetails={productDetails}
          setProductDetails={setProductDetails}
        />
      )}
      {productDetails.shippingTime === "normal" && (
        <MorePhotos
          productDetails={productDetails}
          setProductDetails={setProductDetails}
        />
      )}
    </>
  );
};

export default Shipping;
