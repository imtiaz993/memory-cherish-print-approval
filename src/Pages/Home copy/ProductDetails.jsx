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

const ProductDetails = () => {
  return (
    <div className="flex justify-between">
      <div className="w-[360px] mr-11 mt-5">
        <div className="w-3/4 ml-auto">
          <div className="flex justify-center">
            <img src={Logo} alt="" />
          </div>
          <h1 className="mt-5 text-4xl font-semibold text-black text-center">
            Print Approval Form
          </h1>
          <p className="mt-6 text-base text-black text-center leading-5">
            Please only fill out this form if you don't require any more
            revisions.
          </p>
          <div className="flex flex-col items-center justify-end mt-20">
            <div className="flex flex-col items-end">
              <div className="flex items-end">
                <p className="font-medium text-center flex justify-end mr-1 w-36">
                  Delivery
                  <br /> Address
                </p>
                <div className="bg-checked-step bg-contain bg-no-repeat w-10 h-20">
                  <img className="mt-1 ml-1.5" src={ActiveStep1} alt="" />
                </div>
              </div>
              <div className="w-[2px] h-20 bg-[#FF9728] mr-[19px]"></div>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-end">
                <p className="font-medium text-center flex justify-end mr-1 w-36">
                  Product
                  <br /> Details
                </p>
                <div className="bg-checked-step bg-contain bg-no-repeat w-10 h-20">
                  <img className="mt-1 ml-1.5" src={ActiveStep2} alt="" />
                </div>
              </div>
              <div className="w-[2px] h-20 bg-[#FF9728] mr-[19px]"></div>
            </div>
            <div className="flex items-end">
              <p className="font-medium text-center flex justify-end mr-1 w-36">
                Order Summery &
                <br /> Payment
              </p>
              <div className="bg-unchecked-step bg-contain bg-no-repeat w-10 h-20">
                <img className="mt-2 ml-1.5" src={NonActiveStep3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[calc(100%-360px)] bg-[#FBF4E3]">
        <div className="w-4/5 mx-auto mb-10">
          <h1 className="mt-32 mb-12 text-4xl font-semibold text-black text-center">
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
                  className="border-2 border-[#767676] rounded-xl"
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
                  className="border-2 border-[#767676] rounded-xl"
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
                  className="border-2 border-[#767676] rounded-xl"
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
            <div className="flex justify-between mt-8 mb-12">
              <p className="text-xl font-bold whitespace-nowrap">
                Would you like to add more prints?
              </p>
              <p className="text-base text-[#6B6E76] ml-6">
                Select exactly how many you would like for each photo.
              </p>
            </div>
            <div></div>
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
            <div className="grid grid-cols-3 gap-6">
              <div className="mt-4 bg-white rounded-xl py-2 border-2 border-[#767676]">
                <label className="flex items-start text-base font-medium cursor-pointer px-1 py-2 min-h-[80px]">
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
                <label className="flex items-start text-base font-medium cursor-pointer px-1 py-2 min-h-[80px]">
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
                <label className="flex items-start text-base font-medium cursor-pointer px-1 py-2 min-h-[80px]">
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
