import React from "react";
import Product1 from "../../../Assets/images/product1.png";
import Product2 from "../../../Assets/images/product2.png";
import Product3 from "../../../Assets/images/product3.png";
import Product4 from "../../../Assets/images/product4.png";
import RemoveIcon from "../../../Assets/icons/remove.svg";
import AddIcon from "../../../Assets/icons/add.svg";

const Prints = ({ productDetails, setProductDetails }) => {
  return (
    <div>
      <div className="lg:flex justify-between mt-5 lg:mt-8 mb-12">
        <p className="text-lg lg:text-xl font-bold whitespace-nowrap">
          Would you like to add more prints?
        </p>
        <p className="text-base text-[#6B6E76] lg:ml-6">
          Select exactly how many you would like for each photo.
        </p>
      </div>
      <div className="grid grid-cols-6">
        <div className="bg-[#FFEBDD] rounded-l-xl">
          <div className="border-l sm:border-l-0 border-t sm:border-t-0 sm:border-b-2 border-[#767676]  sm:border-[#C0BDB7]">
            <div className="h-20 flex ml-2 items-center"></div>
          </div>
          <div className="border-l sm:border-l-0 border-t sm:border-t-0 sm:border-b-2 border-[#767676]  sm:border-[#C0BDB7]">
            <div className="h-20 flex ml-2 items-center rounded-lg overflow-hidden">
              <img className="w-4/5 md:w-auto" src={Product1} alt="" />
            </div>
          </div>
          <div className="border-l sm:border-l-0 border-t sm:border-t-0 sm:border-b-2 border-[#767676]  sm:border-[#C0BDB7]">
            <div className="h-20 flex ml-2 items-center rounded-lg overflow-hidden">
              <img className="w-4/5 md:w-auto" src={Product2} alt="" />
            </div>
          </div>
          <div className="border-l sm:border-l-0 border-t sm:border-t-0 sm:border-b-2 border-[#767676]  sm:border-[#C0BDB7]">
            <div className="h-20 flex ml-2 items-center rounded-lg overflow-hidden">
              <img className="w-4/5 md:w-auto" src={Product3} alt="" />
            </div>
          </div>
          <div className="border-l sm:border-l-0 border-y sm:border-y-0 border-[#767676]">
            <div className="h-20 flex ml-2 items-center rounded-lg overflow-hidden">
              <img className="w-4/5 md:w-auto" src={Product4} alt="" />
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="border-l sm:border-l-0 border-t sm:border-t-0 sm:border-b-2 border-[#767676]  sm:border-[#C0BDB7]">
            <div className="flex flex-col justify-center pl-2 md:pl-3 pr-2 md:pr-4 h-20 pb-2">
              <h1 className="text-[#323640] text-xs md:text-lg font-semibold">
                4x6 Print
              </h1>
              <p className="text-[#6B6E76] text-[10px] md:text-sm mt-1 md:mt-0">
                $10 per photo
              </p>
            </div>
          </div>
          <div className="border-l sm:border-l-0 border-t sm:border-t-0 sm:border-b-2 border-[#767676]  sm:border-[#C0BDB7]">
            <div className="flex items-center justify-between pl-1 sm:pl-2 pr-1 sm:pr-4 h-20">
              <div className="w-4 sm:w-7 h-4 sm:h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                <img className="w-3/5 sm:w-auto " src={RemoveIcon} alt="" />
              </div>
              <h1 className="text-[#6B6E76] text-lg font-semibold">0</h1>
              <div className="w-4 sm:w-7 h-4 sm:h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                <img className="w-3/5 sm:w-auto " src={AddIcon} alt="" />
              </div>
            </div>
          </div>
          <div className="border-l sm:border-l-0 border-t sm:border-t-0 sm:border-b-2 border-[#767676]  sm:border-[#C0BDB7]">
            <div className="flex items-center justify-between pl-1 sm:pl-2 pr-1 sm:pr-4 h-20">
              <div className="w-4 sm:w-7 h-4 sm:h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                <img className="w-3/5 sm:w-auto " src={RemoveIcon} alt="" />
              </div>
              <h1 className="text-[#6B6E76] text-lg font-semibold">0</h1>
              <div className="w-4 sm:w-7 h-4 sm:h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                <img className="w-3/5 sm:w-auto " src={AddIcon} alt="" />
              </div>
            </div>
          </div>
          <div className="border-l sm:border-l-0 border-t sm:border-t-0 sm:border-b-2 border-[#767676]  sm:border-[#C0BDB7]">
            <div className="flex items-center justify-between pl-1 sm:pl-2 pr-1 sm:pr-4 h-20">
              <div className="w-4 sm:w-7 h-4 sm:h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                <img className="w-3/5 sm:w-auto " src={RemoveIcon} alt="" />
              </div>
              <h1 className="text-[#6B6E76] text-lg font-semibold">0</h1>
              <div className="w-4 sm:w-7 h-4 sm:h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                <img className="w-3/5 sm:w-auto " src={AddIcon} alt="" />
              </div>
            </div>
          </div>
          <div className="border-l sm:border-l-0 border-y sm:border-y-0 border-[#767676]">
            <div className="flex items-center justify-between pl-1 sm:pl-2 pr-1 sm:pr-4 h-20">
              <div className="w-4 sm:w-7 h-4 sm:h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                <img className="w-3/5 sm:w-auto " src={RemoveIcon} alt="" />
              </div>
              <h1 className="text-[#6B6E76] text-lg font-semibold">0</h1>
              <div className="w-4 sm:w-7 h-4 sm:h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                <img className="w-3/5 sm:w-auto " src={AddIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#EFEFEF]  bg-opacity-50">
          <div className="border-l sm:border-l-0 border-t sm:border-t-0 sm:border-b-2 border-[#767676]  sm:border-[#C0BDB7]">
            <div className="flex flex-col justify-center pl-2 md:pl-3 pr-2 md:pr-4 h-20 pb-2">
              <h1 className="text-[#323640] text-xs md:text-lg font-semibold">
                5x7 Print
              </h1>
              <p className="text-[#6B6E76] text-[10px] md:text-sm mt-1 md:mt-0">
                $15 per photo
              </p>
            </div>
          </div>
          <div className="border-l sm:border-l-0 border-t sm:border-t-0 sm:border-b-2 border-[#767676]  sm:border-[#C0BDB7]">
            <div className="flex items-center justify-between pl-1 sm:pl-2 pr-1 sm:pr-4 h-20">
              <div className="w-4 sm:w-7 h-4 sm:h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                <img className="w-3/5 sm:w-auto " src={RemoveIcon} alt="" />
              </div>
              <h1 className="text-[#6B6E76] text-lg font-semibold">0</h1>
              <div className="w-4 sm:w-7 h-4 sm:h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                <img className="w-3/5 sm:w-auto " src={AddIcon} alt="" />
              </div>
            </div>
          </div>
          <div className="border-l sm:border-l-0 border-t sm:border-t-0 sm:border-b-2 border-[#767676]  sm:border-[#C0BDB7]">
            <div className="flex items-center justify-between pl-1 sm:pl-2 pr-1 sm:pr-4 h-20">
              <div className="w-4 sm:w-7 h-4 sm:h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                <img className="w-3/5 sm:w-auto " src={RemoveIcon} alt="" />
              </div>
              <h1 className="text-[#6B6E76] text-lg font-semibold">0</h1>
              <div className="w-4 sm:w-7 h-4 sm:h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                <img className="w-3/5 sm:w-auto " src={AddIcon} alt="" />
              </div>
            </div>
          </div>
          <div className="border-l sm:border-l-0 border-t sm:border-t-0 sm:border-b-2 border-[#767676]  sm:border-[#C0BDB7]">
            <div className="flex items-center justify-between pl-1 sm:pl-2 pr-1 sm:pr-4 h-20">
              <div className="w-4 sm:w-7 h-4 sm:h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                <img className="w-3/5 sm:w-auto " src={RemoveIcon} alt="" />
              </div>
              <h1 className="text-[#6B6E76] text-lg font-semibold">0</h1>
              <div className="w-4 sm:w-7 h-4 sm:h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                <img className="w-3/5 sm:w-auto " src={AddIcon} alt="" />
              </div>
            </div>
          </div>
          <div className="border-l sm:border-l-0 border-y sm:border-y-0 border-[#767676]">
            <div className="flex items-center justify-between pl-1 sm:pl-2 pr-1 sm:pr-4 h-20">
              <div className="w-4 sm:w-7 h-4 sm:h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                <img className="w-3/5 sm:w-auto " src={RemoveIcon} alt="" />
              </div>
              <h1 className="text-[#6B6E76] text-lg font-semibold">0</h1>
              <div className="w-4 sm:w-7 h-4 sm:h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                <img className="w-3/5 sm:w-auto " src={AddIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="border-l sm:border-l-0 border-t sm:border-t-0 sm:border-b-2 border-[#767676]  sm:border-[#C0BDB7]">
            <div className="flex flex-col justify-center pl-2 md:pl-3 pr-2 md:pr-4 h-20 pb-2">
              <h1 className="text-[#323640] text-xs md:text-lg font-semibold">
                8x10 Print
              </h1>
              <p className="text-[#6B6E76] text-[10px] md:text-sm mt-1 md:mt-0">
                $25 per photo
              </p>
            </div>
          </div>
          <div className="border-l sm:border-l-0 border-t sm:border-t-0 sm:border-b-2 border-[#767676]  sm:border-[#C0BDB7]">
            <div className="flex items-center justify-between pl-1 sm:pl-2 pr-1 sm:pr-4 h-20">
              <div className="w-4 sm:w-7 h-4 sm:h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                <img className="w-3/5 sm:w-auto " src={RemoveIcon} alt="" />
              </div>
              <h1 className="text-[#6B6E76] text-lg font-semibold">0</h1>
              <div className="w-4 sm:w-7 h-4 sm:h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                <img className="w-3/5 sm:w-auto " src={AddIcon} alt="" />
              </div>
            </div>
          </div>
          <div className="border-l sm:border-l-0 border-t sm:border-t-0 sm:border-b-2 border-[#767676]  sm:border-[#C0BDB7]">
            <div className="flex items-center justify-between pl-1 sm:pl-2 pr-1 sm:pr-4 h-20">
              <div className="w-4 sm:w-7 h-4 sm:h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                <img className="w-3/5 sm:w-auto " src={RemoveIcon} alt="" />
              </div>
              <h1 className="text-[#6B6E76] text-lg font-semibold">1</h1>
              <div className="w-4 sm:w-7 h-4 sm:h-7 bg-[#FF9728] cursor-pointer rounded flex justify-center items-center">
                <img className="w-3/5 sm:w-auto " src={AddIcon} alt="" />
              </div>
            </div>
          </div>
          <div className="border-l sm:border-l-0 border-t sm:border-t-0 sm:border-b-2 border-[#767676]  sm:border-[#C0BDB7]">
            <div className="flex items-center justify-between pl-1 sm:pl-2 pr-1 sm:pr-4 h-20">
              <div className="w-4 sm:w-7 h-4 sm:h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                <img className="w-3/5 sm:w-auto " src={RemoveIcon} alt="" />
              </div>
              <h1 className="text-[#6B6E76] text-lg font-semibold">0</h1>
              <div className="w-4 sm:w-7 h-4 sm:h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                <img className="w-3/5 sm:w-auto " src={AddIcon} alt="" />
              </div>
            </div>
          </div>
          <div className="border-l sm:border-l-0 border-y sm:border-y-0 border-[#767676]">
            <div className="flex items-center justify-between pl-1 sm:pl-2 pr-1 sm:pr-4 h-20">
              <div className="w-4 sm:w-7 h-4 sm:h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                <img className="w-3/5 sm:w-auto " src={RemoveIcon} alt="" />
              </div>
              <h1 className="text-[#6B6E76] text-lg font-semibold">0</h1>
              <div className="w-4 sm:w-7 h-4 sm:h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                <img className="w-3/5 sm:w-auto " src={AddIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#EFEFEF] bg-opacity-50">
          <div className="border-l sm:border-l-0 border-t sm:border-t-0 sm:border-b-2 border-[#767676]  sm:border-[#C0BDB7]">
            <div className="flex flex-col justify-center pl-2 md:pl-3 pr-2 md:pr-4 h-20 pb-2">
              <h1 className="text-[#323640] text-xs md:text-lg font-semibold">
                11x14 Print
              </h1>
              <p className="text-[#6B6E76] text-[10px] md:text-sm mt-1 md:mt-0">
                $34 per photo
              </p>
            </div>
          </div>
          <div className="border-l sm:border-l-0 border-t sm:border-t-0 sm:border-b-2 border-[#767676]  sm:border-[#C0BDB7]">
            <div className="flex items-center justify-between pl-1 sm:pl-2 pr-1 sm:pr-4 h-20">
              <div className="w-4 sm:w-7 h-4 sm:h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                <img className="w-3/5 sm:w-auto " src={RemoveIcon} alt="" />
              </div>
              <h1 className="text-[#6B6E76] text-lg font-semibold">0</h1>
              <div className="w-4 sm:w-7 h-4 sm:h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                <img className="w-3/5 sm:w-auto " src={AddIcon} alt="" />
              </div>
            </div>
          </div>
          <div className="border-l sm:border-l-0 border-t sm:border-t-0 sm:border-b-2 border-[#767676]  sm:border-[#C0BDB7]">
            <div className="flex items-center justify-between pl-1 sm:pl-2 pr-1 sm:pr-4 h-20">
              <div className="w-4 sm:w-7 h-4 sm:h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                <img className="w-3/5 sm:w-auto " src={RemoveIcon} alt="" />
              </div>
              <h1 className="text-[#6B6E76] text-lg font-semibold">0</h1>
              <div className="w-4 sm:w-7 h-4 sm:h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                <img className="w-3/5 sm:w-auto " src={AddIcon} alt="" />
              </div>
            </div>
          </div>
          <div className="border-l sm:border-l-0 border-t sm:border-t-0 sm:border-b-2 border-[#767676]  sm:border-[#C0BDB7]">
            <div className="flex items-center justify-between pl-1 sm:pl-2 pr-1 sm:pr-4 h-20">
              <div className="w-4 sm:w-7 h-4 sm:h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                <img className="w-3/5 sm:w-auto " src={RemoveIcon} alt="" />
              </div>
              <h1 className="text-[#6B6E76] text-lg font-semibold">0</h1>
              <div className="w-4 sm:w-7 h-4 sm:h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                <img className="w-3/5 sm:w-auto " src={AddIcon} alt="" />
              </div>
            </div>
          </div>
          <div className="border-l sm:border-l-0 border-y sm:border-y-0 border-[#767676]">
            <div className="flex items-center justify-between pl-1 sm:pl-2 pr-1 sm:pr-4 h-20">
              <div className="w-4 sm:w-7 h-4 sm:h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                <img className="w-3/5 sm:w-auto " src={RemoveIcon} alt="" />
              </div>
              <h1 className="text-[#6B6E76] text-lg font-semibold">1</h1>
              <div className="w-4 sm:w-7 h-4 sm:h-7 bg-[#FF9728] cursor-pointer rounded flex justify-center items-center">
                <img className="w-3/5 sm:w-auto " src={AddIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-r-xl">
          <div className="border-x sm:border-x-0 border-t sm:border-t-0 sm:border-b-2 border-[#767676]  sm:border-[#C0BDB7]">
            <div className="flex flex-col justify-center pl-2 md:pl-3 pr-2 md:pr-4 h-20 pb-2">
              <h1 className="text-[#323640] text-xs md:text-lg font-semibold">
                16x20 Print
              </h1>
              <p className="text-[#6B6E76] text-[10px] md:text-sm mt-1 md:mt-0">
                $49 per photo
              </p>
            </div>
          </div>
          <div className="border-x sm:border-x-0 border-t sm:border-t-0 sm:border-b-2 border-[#767676]  sm:border-[#C0BDB7]">
            <div className="flex items-center justify-between pl-1 sm:pl-2 pr-1 sm:pr-4 h-20">
              <div className="w-4 sm:w-7 h-4 sm:h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                <img className="w-3/5 sm:w-auto " src={RemoveIcon} alt="" />
              </div>
              <h1 className="text-[#6B6E76] text-lg font-semibold">0</h1>
              <div className="w-4 sm:w-7 h-4 sm:h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                <img className="w-3/5 sm:w-auto " src={AddIcon} alt="" />
              </div>
            </div>
          </div>
          <div className="border-x sm:border-x-0 border-t sm:border-t-0 sm:border-b-2 border-[#767676]  sm:border-[#C0BDB7]">
            <div className="flex items-center justify-between pl-1 sm:pl-2 pr-1 sm:pr-4 h-20">
              <div className="w-4 sm:w-7 h-4 sm:h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                <img className="w-3/5 sm:w-auto " src={RemoveIcon} alt="" />
              </div>
              <h1 className="text-[#6B6E76] text-lg font-semibold">0</h1>
              <div className="w-4 sm:w-7 h-4 sm:h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                <img className="w-3/5 sm:w-auto " src={AddIcon} alt="" />
              </div>
            </div>
          </div>
          <div className="border-x sm:border-x-0 border-t sm:border-t-0 sm:border-b-2 border-[#767676]  sm:border-[#C0BDB7]">
            <div className="flex items-center justify-between pl-1 sm:pl-2 pr-1 sm:pr-4 h-20">
              <div className="w-4 sm:w-7 h-4 sm:h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                <img className="w-3/5 sm:w-auto " src={RemoveIcon} alt="" />
              </div>
              <h1 className="text-[#6B6E76] text-lg font-semibold">0</h1>
              <div className="w-4 sm:w-7 h-4 sm:h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                <img className="w-3/5 sm:w-auto " src={AddIcon} alt="" />
              </div>
            </div>
          </div>
          <div className="border-x sm:border-x-0 border-y sm:border-y-0 border-[#767676]">
            <div className="flex items-center justify-between pl-1 sm:pl-2 pr-1 sm:pr-4 h-20">
              <div className="w-4 sm:w-7 h-4 sm:h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                <img className="w-3/5 sm:w-auto " src={RemoveIcon} alt="" />
              </div>
              <h1 className="text-[#6B6E76] text-lg font-semibold">0</h1>
              <div className="w-4 sm:w-7 h-4 sm:h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                <img className="w-3/5 sm:w-auto " src={AddIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prints;
