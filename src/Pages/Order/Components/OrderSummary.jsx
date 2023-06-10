import React, { useState } from "react";
import Product1 from "../../../Assets/images/product1.png";
import Product3 from "../../../Assets/images/product3.png";
import RemoveIcon from "../../../Assets/icons/remove.svg";
import AddIcon from "../../../Assets/icons/add.svg";
import CloseIcon from "../../../Assets/icons/close.svg";
import AccordionIcon from "../../../Assets/icons/order-accordion.svg";

const OrderSummary = () => {
  const [isOpenAccordion, setIsOpenAccordion] = useState(true);
  return (
    <div
      className={`mt-4 rounded-xl lg:rounded-2xl shadow-mobile-card bg-white py-1.5 lg:py-2 px-2 lg:px-3 overflow-hidden ${
        !isOpenAccordion ? "h-32 lg:h-36" : ""
      }`}
    >
      <h1 className="text-xl lg:text-3xl font-semibold px-6 py-4">
        Order Summary
      </h1>
      <div className="border-y-4 border-[#F7780F] mb-6 lg:mb-10">
        <div className="flex justify-between items-center px-4">
          <div className="flex items-center">
            <div className="w-3 lg:w-4 h-3 lg:h-4 bg-[#DAD6CE] rounded-full"></div>
            <p className="text-lg lg:text-2xl font-medium py-4 pl-3 lg:pl-4">
              Your Order Extras
            </p>
          </div>
          <div>
            <img
              className={`cursor-pointer ${
                isOpenAccordion
                  ? "rotate-0 transition-all"
                  : "rotate-180 transition-all"
              }}`}
              onClick={() => {
                setIsOpenAccordion(!isOpenAccordion);
              }}
              src={AccordionIcon}
              alt=""
            />
          </div>
        </div>
        <div className={`${isOpenAccordion ? "h-auto" : "h-0"}`}>
          <div className="mb-10 lg:mb-20">
            <div className="bg-[#F9F8F6] py-4 px-6 mb-6 grid grid-cols-4 md:grid-cols-5 items-center">
              <p className="col-span-2 md:col-span-3 text-xs md:text-base text-[#6B6E76]">
                Product
              </p>
              <p className="text-center text-xs md:text-base text-[#6B6E76]">
                Qty
              </p>
              <p className="text-right pr-5 md:pr-9 text-xs md:text-base text-[#6B6E76]">
                Price
              </p>
            </div>
            <div className="py-3 px-2 grid grid-cols-4 md:grid-cols-5 items-center min-h-[80px]">
              <div className="col-span-2 md:col-span-3 flex items-center">
                <div className="h-20 flex md:ml-2 items-center rounded-lg overflow-hidden">
                  <img className="w-10 md:w-4/5" src={Product1} alt="" />
                </div>
                <div className="ml-2 md:ml-0">
                  <p className="text-xs md:text-base text-[#2A2A28] font-bold">
                    Framed Print (8x10)
                  </p>
                  <p className="text-xs md:text-base text-[#2A2A28] font-bold mt-1">
                    Additional 5x7 Prints
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-center md:pr-10">
                  <div className="w-5 h-5 bg-[#09BAA6] cursor-pointer rounded flex justify-center items-center">
                    <img className="w-3/5 sm:w-auto " src={RemoveIcon} alt="" />
                  </div>
                  <h1 className="text-[#6B6E76] text-xs md:text-base px-2">
                    1
                  </h1>
                  <div className="w-5 h-5 bg-[#09BAA6] cursor-pointer rounded flex justify-center items-center">
                    <img className="w-3/5 sm:w-auto " src={AddIcon} alt="" />
                  </div>
                </div>
                <div className="flex items-center justify-center md:pr-10 mt-2">
                  <div className="w-5 h-5 bg-[#09BAA6] cursor-pointer rounded flex justify-center items-center">
                    <img className="w-3/5 sm:w-auto " src={RemoveIcon} alt="" />
                  </div>
                  <h1 className="text-[#6B6E76] text-xs md:text-base px-2">
                    2
                  </h1>
                  <div className="w-5 h-5 bg-[#09BAA6] cursor-pointer rounded flex justify-center items-center">
                    <img className="w-3/5 sm:w-auto " src={AddIcon} alt="" />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-end">
                  <p className="text-center text-xs md:text-base text-[#6B6E76]">
                    $50.00
                  </p>
                  <div className="ml-2 md:ml-8 bg-[#FF9728] cursor-pointer w-5 h-5 rounded-full flex justify-center items-center">
                    <img src={CloseIcon} alt="" />
                  </div>
                </div>
                <div className="flex items-center justify-end mt-2">
                  <p className="text-center text-xs md:text-base text-[#6B6E76]">
                    $30.00
                  </p>
                  <div className="ml-2 md:ml-8 bg-[#FF9728] cursor-pointer w-5 h-5 rounded-full flex justify-center items-center">
                    <img src={CloseIcon} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="py-3 px-2 border-t border-[#DAD6CE] grid grid-cols-4 md:grid-cols-5 items-center min-h-[80px]">
              <div className="col-span-2 md:col-span-3 flex items-center">
                <div className="h-20 flex md:ml-2 items-center rounded-lg overflow-hidden">
                  <img className="w-10 md:w-4/5" src={Product3} alt="" />
                </div>

                <p className="ml-2 md:ml-0 text-xs md:text-base text-[#2A2A28] font-bold">
                  Framed Print (8x10)
                </p>
              </div>

              <div className="flex items-center justify-center md:pr-10">
                <div className="w-5 h-5 bg-[#09BAA6] cursor-pointer rounded flex justify-center items-center">
                  <img className="w-3/5 sm:w-auto " src={RemoveIcon} alt="" />
                </div>
                <h1 className="text-[#6B6E76] text-xs md:text-base px-2">1</h1>
                <div className="w-5 h-5 bg-[#09BAA6] cursor-pointer rounded flex justify-center items-center">
                  <img className="w-3/5 sm:w-auto " src={AddIcon} alt="" />
                </div>
              </div>
              <div className="flex items-center justify-end">
                <p className="text-center text-xs md:text-base text-[#6B6E76]">
                  $25.99
                </p>
                <div className="ml-2 md:ml-8 bg-[#FF9728] cursor-pointer w-5 h-5 rounded-full flex justify-center items-center">
                  <img src={CloseIcon} alt="" />
                </div>
              </div>
            </div>
            <div className="py-3 px-2 border-t border-[#DAD6CE] grid grid-cols-4 md:grid-cols-5 items-center pl-14 md:pl-[92px] pr-6">
              <p className="col-span-2 md:col-span-3 text-xs md:text-base text-[#2A2A28] font-semibold">
                Express Shipping Fee
              </p>
              <p className="text-center pr-10 "></p>
              <p className="text-right pr-5 md:pr-9 text-xs md:text-base text-[#6B6E76]">
                $29.00
              </p>
            </div>
            <div className="py-3 px-2 border-t border-[#DAD6CE] grid grid-cols-4 md:grid-cols-5 items-center pl-14 md:pl-[92px] pr-6">
              <p className="col-span-2 md:col-span-3 text-xs md:text-base text-[#2A2A28] font-semibold">
                Print Finish (Matte)
              </p>
              <p className="text-center pr-7 md:pr-16 text-xs md:text-base text-[#6B6E76]">
                x6
              </p>
              <p className="text-right pr-5 md:pr-9 text-xs md:text-base text-[#6B6E76]">
                $50.00
              </p>
            </div>
            <div className="py-3 px-2 border-t border-[#DAD6CE] grid grid-cols-4 md:grid-cols-5 items-center pl-14 md:pl-[92px] pr-6">
              <p className="col-span-2 md:col-span-3 text-xs md:text-base text-[#2A2A28] font-semibold">
                Print Protective Coating (All Photos):{" "}
                <span className="text-[#6B6E76]">Yes</span>
              </p>
              <p className="text-center pr-7 md:pr-16 text-xs md:text-base text-[#6B6E76]">
                x6
              </p>
              <p className="text-right pr-5 md:pr-9 text-xs md:text-base text-[#6B6E76]">
                $50.00
              </p>
            </div>
          </div>
          <div className="flex justify-between mb-4 w-11/12 mx-auto">
            <p className="text-lg lg:text-xl text-[#323640]">Total</p>
            <p className="text-lg lg:text-xl text-[#F7780F]">$481.92</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
