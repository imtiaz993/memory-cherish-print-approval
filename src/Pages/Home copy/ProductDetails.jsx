import React from "react";
import Logo from "../../Assets/icons/logo.svg";
import CheckIcon from "../../Assets/icons/black-check.svg";
import ActiveStep1 from "../../Assets/icons/active-step-1.svg";
import ActiveStep2 from "../../Assets/icons/active-step-2.svg";
import NonActiveStep3 from "../../Assets/icons/nonactive-step-3.svg";
import MatteFinish from "../../Assets/images/Matte Finish.png";
import GlossyFinish from "../../Assets/images/Glossy Finish.png";
import LusterFinish from "../../Assets/images/Luster Finish.png";
import Recommended from "../../Assets/images/Recomended.png";
import Product1 from "../../Assets/images/product1.png";
import Product2 from "../../Assets/images/product2.png";
import Product3 from "../../Assets/images/product3.png";
import Product4 from "../../Assets/images/product4.png";
import RemoveIcon from "../../Assets/icons/remove.svg";
import AddIcon from "../../Assets/icons/add.svg";

const ProductDetails = () => {
  return (
    <div className="lg:flex justify-between">
      <div className="lg:w-[360px] lg:mr-11 mt-5">
        <div className="w-11/12 lg:w-3/4 mx-auto lg:mx-0 lg:ml-auto">
          <div className="flex justify-center">
            <img src={Logo} alt="" />
          </div>
          <h1 className="mt-5 text-3xl lg:text-4xl font-semibold text-black text-center">
            Print Approval Form
          </h1>
          <p className="mt-6 text-base text-black text-center leading-5">
            Please only fill out this form if you don't require any more
            revisions.
          </p>
          <div className="flex lg:flex-col lg:items-center justify-center lg:justify-end mt-20">
            <div className="flex lg:flex-col items-center lg:items-end">
              <div className="flex flex-col-reverse lg:flex-row items-end">
                <p className="absolute lg:static font-medium text-center flex justify-end text-xs lg:text-base mt-2 lg:mt-0 lg:mr-1 lg:w-36">
                  Delivery
                  <br /> Address
                </p>
                <div className="relative bottom-10 lg:static bg-checked-step bg-contain bg-no-repeat w-10 h-20">
                  <img className="mt-1 ml-1.5" src={ActiveStep1} alt="" />
                </div>
              </div>
              <div className="relative bottom-4 lg:static mt-4 lg:mt-0 -ml-3 md:ml-0 w-28 lg:w-[2px] h-[2px] lg:h-20 bg-[#FF9728] lg:mr-[19px]"></div>
            </div>
            <div className="-ml-4 lg:ml-0 flex lg:flex-col items-center lg:items-end">
              <div className="flex flex-col-reverse lg:flex-row items-end">
                <p className="absolute lg:static font-medium text-center flex justify-end text-xs lg:text-base mt-2 lg:mt-0 lg:mr-1 lg:w-36">
                  Product
                  <br /> Details
                </p>
                <div className="relative bottom-10 lg:static bg-checked-step bg-contain bg-no-repeat w-10 h-20">
                  <img className="mt-1 ml-1.5" src={ActiveStep2} alt="" />
                </div>
              </div>
              <div className="relative bottom-4 lg:static mt-4 lg:mt-0 -ml-3 md:ml-0 w-28 lg:w-[2px] h-[2px] lg:h-20 bg-[#FF9728] lg:mr-[19px]"></div>
            </div>
            <div className="-ml-4 lg:ml-0 flex lg:flex-col items-center lg:items-end">
              <div className="flex flex-col-reverse lg:flex-row items-end">
                <p className="absolute lg:static font-medium text-center flex justify-end text-xs lg:text-base mt-2 lg:mt-0 lg:mr-1 lg:w-36">
                  Order Summery &
                  <br /> Payment
                </p>
                <div className="relative bottom-10 lg:static bg-unchecked-step bg-contain bg-no-repeat w-10 h-20">
                  <img className="mt-2 ml-1.5" src={NonActiveStep3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[calc(100%-360px)] lg:bg-[#FBF4E3]">
        <div className="w-11/12 lg:w-4/5 mx-auto mb-10">
          <h1 className="mt-8 lg:mt-32 mb-6 lg:mb-12 text-3xl lg:text-4xl font-semibold text-black text-center">
            2. Product Details
          </h1>
          <div>
            <p className="text-xl font-bold">
              Which Print Finish Do You Prefer?
            </p>
            <div className="grid grid-cols-3 gap-11 mt-7">
              <div>
                <label className="flex mb-4 cursor-pointer">
                  <input type="radio" className="cursor-pointer" />
                  <p className="whitespace-nowrap ml-2 text-base">
                    Matte Finish (Most Popular)
                  </p>
                </label>
                <img
                  className="border-2 border-[#767676] rounded-xl overflow-hidden"
                  src={MatteFinish}
                  alt=""
                />
              </div>
              <div>
                <label className="flex mb-4 cursor-pointer">
                  <input type="radio" className="cursor-pointer" />
                  <p className="whitespace-nowrap ml-2 text-base">
                    Glossy Finish
                  </p>
                </label>
                <img
                  className="border-2 border-[#767676] rounded-xl overflow-hidden"
                  src={GlossyFinish}
                  alt=""
                />
              </div>
              <div>
                <label className="flex mb-4 cursor-pointer">
                  <input type="radio" className="cursor-pointer" />
                  <p className="whitespace-nowrap ml-2 text-base">
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
          <div>
            <div>
              <p className="mt-16 text-xl font-bold max-w-[627px]">
                Would you like to add a protective coating to your prints to
                make them fade-proof?
              </p>
              <img className="mt-5" src={Recommended} alt="" />
              <div className="mt-4">
                <div className=" bg-white rounded-xl py-2 px-3">
                  <label className="text-base font-medium cursor-pointer">
                    <input type="radio" className="cursor-pointer" />
                    <span className="ml-5">
                      Yes! Please coat all of the prints I ordered! [MOST
                      POPULAR, only $9 per print]
                    </span>
                  </label>
                </div>
                <div className="mt-2 bg-white rounded-xl py-2 px-3">
                  <label className="text-base font-medium cursor-pointer">
                    <input type="radio" className="cursor-pointer" />
                    <span className="ml-5">No thanks.</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="lg:flex justify-between mt-8 mb-12">
              <p className="text-xl font-bold whitespace-nowrap">
                Would you like to add more prints?
              </p>
              <p className="text-base text-[#6B6E76] lg:ml-6">
                Select exactly how many you would like for each photo.
              </p>
            </div>
            <div className="grid grid-cols-6">
              <div className="bg-[#FFEBDD] rounded-l-xl">
                <div className="border-b-2 border-[#C0BDB7]">
                  <div className="h-20 flex ml-2 items-center"></div>
                </div>
                <div className="border-b-2 border-[#C0BDB7]">
                  <div className="h-20 flex ml-2 items-center rounded-lg overflow-hidden">
                    <img className="" src={Product1} alt="" />
                  </div>
                </div>
                <div className="border-b-2 border-[#C0BDB7]">
                  <div className="h-20 flex ml-2 items-center rounded-lg overflow-hidden">
                    <img className="" src={Product2} alt="" />
                  </div>
                </div>
                <div className="border-b-2 border-[#C0BDB7]">
                  <div className="h-20 flex ml-2 items-center rounded-lg overflow-hidden">
                    <img className="" src={Product3} alt="" />
                  </div>
                </div>
                <div className="">
                  <div className="h-20 flex ml-2 items-center rounded-lg overflow-hidden">
                    <img className="" src={Product4} alt="" />
                  </div>
                </div>
              </div>
              <div className="bg-white">
                <div className="border-b-2 border-[#C0BDB7]">
                  <div className="flex flex-col justify-center pl-3 pr-4 h-20 pb-2">
                    <h1 className="text-[#323640] text-lg font-semibold">
                      4x6 Print
                    </h1>
                    <p className="text-[#6B6E76] text-sm">$10 per photo</p>
                  </div>
                </div>
                <div className="border-b-2 border-[#C0BDB7]">
                  <div className="flex items-center justify-between pl-2 pr-4 h-20">
                    <div className="w-7 h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                      <img src={RemoveIcon} alt="" />
                    </div>
                    <h1 className="text-[#6B6E76] text-lg font-semibold">0</h1>
                    <div className="w-7 h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                      <img src={AddIcon} alt="" />
                    </div>
                  </div>
                </div>
                <div className="border-b-2 border-[#C0BDB7]">
                  <div className="flex items-center justify-between pl-2 pr-4 h-20">
                    <div className="w-7 h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                      <img src={RemoveIcon} alt="" />
                    </div>
                    <h1 className="text-[#6B6E76] text-lg font-semibold">0</h1>
                    <div className="w-7 h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                      <img src={AddIcon} alt="" />
                    </div>
                  </div>
                </div>
                <div className="border-b-2 border-[#C0BDB7]">
                  <div className="flex items-center justify-between pl-2 pr-4 h-20">
                    <div className="w-7 h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                      <img src={RemoveIcon} alt="" />
                    </div>
                    <h1 className="text-[#6B6E76] text-lg font-semibold">0</h1>
                    <div className="w-7 h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                      <img src={AddIcon} alt="" />
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center justify-between pl-2 pr-4 h-20">
                    <div className="w-7 h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                      <img src={RemoveIcon} alt="" />
                    </div>
                    <h1 className="text-[#6B6E76] text-lg font-semibold">0</h1>
                    <div className="w-7 h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                      <img src={AddIcon} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#EFEFEF] opacity-50">
                <div className="border-b-2 border-[#C0BDB7]">
                  <div className="flex flex-col justify-center pl-3 pr-4 h-20 pb-2">
                    <h1 className="text-[#323640] text-lg font-semibold">
                      5x7 Print
                    </h1>
                    <p className="text-[#6B6E76] text-sm">$15 per photo</p>
                  </div>
                </div>
                <div className="border-b-2 border-[#C0BDB7]">
                  <div className="flex items-center justify-between pl-2 pr-4 h-20">
                    <div className="w-7 h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                      <img src={RemoveIcon} alt="" />
                    </div>
                    <h1 className="text-[#6B6E76] text-lg font-semibold">0</h1>
                    <div className="w-7 h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                      <img src={AddIcon} alt="" />
                    </div>
                  </div>
                </div>
                <div className="border-b-2 border-[#C0BDB7]">
                  <div className="flex items-center justify-between pl-2 pr-4 h-20">
                    <div className="w-7 h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                      <img src={RemoveIcon} alt="" />
                    </div>
                    <h1 className="text-[#6B6E76] text-lg font-semibold">0</h1>
                    <div className="w-7 h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                      <img src={AddIcon} alt="" />
                    </div>
                  </div>
                </div>
                <div className="border-b-2 border-[#C0BDB7]">
                  <div className="flex items-center justify-between pl-2 pr-4 h-20">
                    <div className="w-7 h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                      <img src={RemoveIcon} alt="" />
                    </div>
                    <h1 className="text-[#6B6E76] text-lg font-semibold">0</h1>
                    <div className="w-7 h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                      <img src={AddIcon} alt="" />
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center justify-between pl-2 pr-4 h-20">
                    <div className="w-7 h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                      <img src={RemoveIcon} alt="" />
                    </div>
                    <h1 className="text-[#6B6E76] text-lg font-semibold">0</h1>
                    <div className="w-7 h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                      <img src={AddIcon} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white">
                <div className="border-b-2 border-[#C0BDB7]">
                  <div className="flex flex-col justify-center pl-3 pr-4 h-20 pb-2">
                    <h1 className="text-[#323640] text-lg font-semibold">
                      8x10 Print
                    </h1>
                    <p className="text-[#6B6E76] text-sm">$25 per photo</p>
                  </div>
                </div>
                <div className="border-b-2 border-[#C0BDB7]">
                  <div className="flex items-center justify-between pl-2 pr-4 h-20">
                    <div className="w-7 h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                      <img src={RemoveIcon} alt="" />
                    </div>
                    <h1 className="text-[#6B6E76] text-lg font-semibold">0</h1>
                    <div className="w-7 h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                      <img src={AddIcon} alt="" />
                    </div>
                  </div>
                </div>
                <div className="border-b-2 border-[#C0BDB7]">
                  <div className="flex items-center justify-between pl-2 pr-4 h-20">
                    <div className="w-7 h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                      <img src={RemoveIcon} alt="" />
                    </div>
                    <h1 className="text-[#6B6E76] text-lg font-semibold">1</h1>
                    <div className="w-7 h-7 bg-[#FF9728] cursor-pointer rounded flex justify-center items-center">
                      <img src={AddIcon} alt="" />
                    </div>
                  </div>
                </div>
                <div className="border-b-2 border-[#C0BDB7]">
                  <div className="flex items-center justify-between pl-2 pr-4 h-20">
                    <div className="w-7 h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                      <img src={RemoveIcon} alt="" />
                    </div>
                    <h1 className="text-[#6B6E76] text-lg font-semibold">0</h1>
                    <div className="w-7 h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                      <img src={AddIcon} alt="" />
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center justify-between pl-2 pr-4 h-20">
                    <div className="w-7 h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                      <img src={RemoveIcon} alt="" />
                    </div>
                    <h1 className="text-[#6B6E76] text-lg font-semibold">0</h1>
                    <div className="w-7 h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                      <img src={AddIcon} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#EFEFEF] opacity-50">
                <div className="border-b-2 border-[#C0BDB7]">
                  <div className="flex flex-col justify-center pl-3 pr-4 h-20 pb-2">
                    <h1 className="text-[#323640] text-lg font-semibold">
                      11x14 Print
                    </h1>
                    <p className="text-[#6B6E76] text-sm">$34 per photo</p>
                  </div>
                </div>
                <div className="border-b-2 border-[#C0BDB7]">
                  <div className="flex items-center justify-between pl-2 pr-4 h-20">
                    <div className="w-7 h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                      <img src={RemoveIcon} alt="" />
                    </div>
                    <h1 className="text-[#6B6E76] text-lg font-semibold">0</h1>
                    <div className="w-7 h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                      <img src={AddIcon} alt="" />
                    </div>
                  </div>
                </div>
                <div className="border-b-2 border-[#C0BDB7]">
                  <div className="flex items-center justify-between pl-2 pr-4 h-20">
                    <div className="w-7 h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                      <img src={RemoveIcon} alt="" />
                    </div>
                    <h1 className="text-[#6B6E76] text-lg font-semibold">0</h1>
                    <div className="w-7 h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                      <img src={AddIcon} alt="" />
                    </div>
                  </div>
                </div>
                <div className="border-b-2 border-[#C0BDB7]">
                  <div className="flex items-center justify-between pl-2 pr-4 h-20">
                    <div className="w-7 h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                      <img src={RemoveIcon} alt="" />
                    </div>
                    <h1 className="text-[#6B6E76] text-lg font-semibold">0</h1>
                    <div className="w-7 h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                      <img src={AddIcon} alt="" />
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center justify-between pl-2 pr-4 h-20">
                    <div className="w-7 h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                      <img src={RemoveIcon} alt="" />
                    </div>
                    <h1 className="text-[#6B6E76] text-lg font-semibold">1</h1>
                    <div className="w-7 h-7 bg-[#FF9728] cursor-pointer rounded flex justify-center items-center">
                      <img src={AddIcon} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-r-xl">
                <div className="border-b-2 border-[#C0BDB7]">
                  <div className="flex flex-col justify-center pl-3 pr-4 h-20 pb-2">
                    <h1 className="text-[#323640] text-lg font-semibold">
                      16x20 Print
                    </h1>
                    <p className="text-[#6B6E76] text-sm">$49 per photo</p>
                  </div>
                </div>
                <div className="border-b-2 border-[#C0BDB7]">
                  <div className="flex items-center justify-between pl-2 pr-4 h-20">
                    <div className="w-7 h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                      <img src={RemoveIcon} alt="" />
                    </div>
                    <h1 className="text-[#6B6E76] text-lg font-semibold">0</h1>
                    <div className="w-7 h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                      <img src={AddIcon} alt="" />
                    </div>
                  </div>
                </div>
                <div className="border-b-2 border-[#C0BDB7]">
                  <div className="flex items-center justify-between pl-2 pr-4 h-20">
                    <div className="w-7 h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                      <img src={RemoveIcon} alt="" />
                    </div>
                    <h1 className="text-[#6B6E76] text-lg font-semibold">0</h1>
                    <div className="w-7 h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                      <img src={AddIcon} alt="" />
                    </div>
                  </div>
                </div>
                <div className="border-b-2 border-[#C0BDB7]">
                  <div className="flex items-center justify-between pl-2 pr-4 h-20">
                    <div className="w-7 h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                      <img src={RemoveIcon} alt="" />
                    </div>
                    <h1 className="text-[#6B6E76] text-lg font-semibold">0</h1>
                    <div className="w-7 h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                      <img src={AddIcon} alt="" />
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center justify-between pl-2 pr-4 h-20">
                    <div className="w-7 h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                      <img src={RemoveIcon} alt="" />
                    </div>
                    <h1 className="text-[#6B6E76] text-lg font-semibold">0</h1>
                    <div className="w-7 h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center">
                      <img src={AddIcon} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="mt-20 text-xl font-bold">
              Are you interested in adding frames to your prints?
            </p>
            <div className="mt-4">
              <div className=" bg-white rounded-xl py-2 px-3">
                <label className="text-base font-medium cursor-pointer">
                  <input type="radio" className="cursor-pointer" />
                  <span className="ml-5">Yes</span>
                </label>
              </div>
              <div className="mt-3 bg-white rounded-xl py-2 px-3">
                <label className="text-base font-medium cursor-pointer">
                  <input type="radio" className="cursor-pointer" />
                  <span className="ml-5">No</span>
                </label>
              </div>
            </div>
          </div>
          <div>
            <p className="mt-10 text-xl font-bold">
              Do you require express shipping?
            </p>
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="mt-4 bg-white rounded-xl py-2 border-2 border-[#767676]">
                <label className="flex items-start text-base font-medium cursor-pointer px-1 pb-2 lg:min-h-[80px]">
                  <input type="radio" className="cursor-pointer mt-2 ml-1" />
                  <span className="ml-2">
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
                  <input type="radio" className="cursor-pointer mt-2 ml-1" />
                  <span className="ml-2">
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
                  <input type="radio" className="cursor-pointer mt-2 ml-1" />
                  <span className="ml-2">
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
          <div className="flex justify-end mt-10">
            <button className="bg-[#FF9728] rounded-xl text-xl text-white font-semibold py-3 px-6">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
