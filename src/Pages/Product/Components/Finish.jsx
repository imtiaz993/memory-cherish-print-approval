import React from "react";
import MatteFinish from "../../../Assets/images/Matte Finish.png";
import GlossyFinish from "../../../Assets/images/Glossy Finish.png";
import LusterFinish from "../../../Assets/images/Luster Finish.png";

const Finish = ({ productDetails, setProductDetails }) => {
  return (
    <div>
      <p className="text-lg lg:text-xl font-bold">
        Which Print Finish Do You Prefer?
      </p>
      <div className="grid grid-cols-3  gap-4 lg:gap-11 mt-5 lg:mt-7">
        <div className="flex flex-col justify-between">
          <label className="flex mb-4 cursor-pointer">
            <input
              checked={productDetails.finish === "Mate Finish"}
              onClick={() => {
                setProductDetails({ ...productDetails, finish: "Mate Finish" });
              }}
              type="radio"
              className="mt-0.5 cursor-pointer "
            />
            <p className="w-[calc(100%-20px)] lg:whitespace-nowrap ml-2 text-xs md:text-sm lg:text-base">
              Matte Finish (Most Popular)
            </p>
          </label>
          <img
            className="border-2 border-[#767676] rounded-xl overflow-hidden"
            src={MatteFinish}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between">
          <label className="flex mb-4 cursor-pointer">
            <input
              checked={productDetails.finish === "Glossy Finish"}
              onClick={() => {
                setProductDetails({
                  ...productDetails,
                  finish: "Glossy Finish",
                });
              }}
              type="radio"
              className="mt-0.5 cursor-pointer "
            />
            <p className="whitespace-nowrap ml-2 text-xs md:text-sm lg:text-base">
              Glossy Finish
            </p>
          </label>
          <img
            className="border-2 border-[#767676] rounded-xl overflow-hidden"
            src={GlossyFinish}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between">
          <label className="flex mb-4 cursor-pointer">
            <input
              checked={productDetails.finish === "Luster Finish"}
              onClick={() => {
                setProductDetails({
                  ...productDetails,
                  finish: "Luster Finish",
                });
              }}
              type="radio"
              className="mt-0.5 cursor-pointer "
            />
            <p className="whitespace-nowrap ml-2 text-xs md:text-sm lg:text-base">
              Luster Finish
            </p>
          </label>
          <img
            className="border-2 border-[#767676] rounded-xl overflow-hidden"
            src={LusterFinish}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Finish;
