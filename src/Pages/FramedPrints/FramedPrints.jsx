import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../Assets/images/logo.png";
import AccordionCollapse from "../../Assets/icons/accordion-collapse.svg";
import ActiveStep1 from "../../Assets/icons/active-step-1.svg";
import ActiveStep2 from "../../Assets/icons/active-step-2.svg";
import NonActiveStep3 from "../../Assets/icons/nonactive-step-3.svg";
import Product1 from "../../Assets/images/product1.png";
import Product1Framed from "../../Assets/images/product1Framed.png";
import Product2Framed from "../../Assets/images/product2Framed.png";
import Product2 from "../../Assets/images/product2.png";
import Product3 from "../../Assets/images/product3.png";
import Product4 from "../../Assets/images/product4.png";

const FramedPrints = () => {
  const navigate = useNavigate();
  const [isOpenAccordion, setIsOpenAccordion] = useState({
    id: "",
    status: false,
  });
  return (
    <div className="lg:flex justify-between">
      <div className="lg:w-[360px] lg:mr-11 mt-5 lg:mb-10">
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
        <div className="w-11/12 xl:w-4/5 mx-auto mb-10">
          <h1 className="mt-8 lg:mt-32 mb-6 lg:mb-12 text-3xl lg:text-4xl font-semibold text-black text-center">
            Add Your Framed Prints
          </h1>
          <div>
            <div className="mt-4 rounded-xl lg:rounded-2xl shadow-mobile-card bg-white py-1.5 lg:py-2 px-2 lg:px-3 overflow-hidden">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    className="w-10 lg:w-20 rounded-lg"
                    src={Product1}
                    alt=""
                  />
                  <h1 className="ml-3 sm:ml-4 lg:ml-14 text-xs sm:text-sm lg:text-xl font-bold text-[#2A2A28]">
                    Add Framed Print?
                  </h1>
                </div>
                <div className="flex items-center">
                  <label className="flex items-center text-xs sm:text-sm lg:text-xl font-medium cursor-pointer">
                    <input type="radio" className="mt-0.5 cursor-pointer " />
                    <span className="ml-1 lg:ml-2">Yes</span>
                  </label>

                  <label className="flex items-center text-xs sm:text-sm lg:text-xl font-medium cursor-pointer ml-4 lg:ml-8">
                    <input type="radio" className="mt-0.5 cursor-pointer " />
                    <span className="ml-1 lg:ml-2">No</span>
                  </label>
                </div>
                <img
                  className={`ml-6 mr-1 lg:mr-8 cursor-pointer ${
                    isOpenAccordion.id === "1" && isOpenAccordion.status
                      ? "rotate-180 transition-all"
                      : "rotate-0 transition-all"
                  }`}
                  src={AccordionCollapse}
                  alt=""
                  onClick={() => {
                    setIsOpenAccordion({
                      id: "1",
                      status: !isOpenAccordion.status,
                    });
                  }}
                />
              </div>
              <div
                className={`md:w-2/3 mx-auto ${
                  isOpenAccordion.id === "1" && isOpenAccordion.status
                    ? "h-full transition-all duration-150"
                    : "h-0 transition-all duration-150"
                }`}
              >
                <div className="w-full flex justify-center pb-8 lg:pb-16 border-b-[3px] border-[#FF9728]">
                  <img
                    className="w-44 md:w-auto mt-8"
                    src={Product1Framed}
                    alt=""
                  />
                </div>
                <div className="mt-5 lg:mt-10">
                  <div className="flex justify-between items-baseline mb-6 lg:mb-10">
                    <h1 className="whitespace-nowrap text-sm lg:text-2xl text-[#2A2A28]">
                      Size
                    </h1>
                    <div className="flex text-center items-end">
                      <div>
                        <div className="w-[11px] md:w-[18px] h-[12px] md:h-[20px] border border-[#2A2A28]"></div>
                        <p className="text-[10px] md:text-xs text-[#2A2A28]">
                          8x10
                        </p>
                      </div>
                      <div className="flex flex-col items-center ml-3 md:ml-4">
                        <div className="w-[11px] md:w-[17px] h-[16px] md:h-[26px] border border-[#2A2A28]"></div>
                        <p className="text-[10px] md:text-xs text-[#2A2A28]">
                          11x14
                        </p>
                      </div>
                      <div className="flex flex-col items-center ml-3 md:ml-4">
                        <div className="w-[13px] md:w-[21px] h-[13px] md:h-[21px] border border-[#2A2A28]"></div>
                        <p className="text-[10px] md:text-xs text-[#2A2A28]">
                          12x12
                        </p>
                      </div>
                      <div className="flex flex-col items-center ml-3 md:ml-4">
                        <div className="w-[20px] md:w-[33px] h-[20px] md:h-[33px] border border-[#2A2A28]"></div>
                        <p className="text-[10px] md:text-xs text-[#2A2A28]">
                          16x16
                        </p>
                      </div>
                      <div className="flex flex-col items-center ml-3 md:ml-4">
                        <div className="w-[15px] md:w-[23px] h-[20px] md:h-[30px] border border-[#2A2A28]"></div>
                        <p className="text-[10px] md:text-xs text-[#2A2A28]">
                          16x20
                        </p>
                      </div>
                      <div className="flex flex-col items-center ml-3 md:ml-4">
                        <div className="w-[17px] md:w-[27px] h-[24px] md:h-[37px] border border-[#2A2A28]"></div>
                        <p className="text-[10px] md:text-xs text-[#2A2A28]">
                          20x30
                        </p>
                      </div>
                      <div className="flex flex-col items-center ml-3 md:ml-4">
                        <div className="w-[20px] md:w-[31px] h-[31px] md:h-[47px] border border-[#2A2A28]"></div>
                        <p className="text-[10px] md:text-xs text-[#2A2A28]">
                          24x36
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-8 lg:mb-16">
                    <h1 className="whitespace-nowrap text-sm lg:text-2xl text-[#2A2A28]">
                      Frame Colour{" "}
                    </h1>
                    <div className="flex text-center items-end">
                      <div className="flex flex-col items-center mr-3 md:mr-7">
                        <div className="w-5 md:w-8 h-5 md:h-8 border border-[#767676] bg-black"></div>
                        <p className="text-[10px] md:text-xs mt-1">Black</p>
                      </div>
                      <div className="flex flex-col items-center mr-3 md:mr-7">
                        <div className="w-5 md:w-8 h-5 md:h-8 border border-[#767676]"></div>
                        <p className="text-[10px] md:text-xs mt-1">White</p>
                      </div>
                      <div className="flex flex-col items-center mr-3 md:mr-7">
                        <div className="w-5 md:w-8 h-5 md:h-8 border border-[#767676] bg-[#964B00]"></div>
                        <p className="text-[10px] md:text-xs mt-1">Brown</p>
                      </div>
                      <div className="flex flex-col items-center mr-3 md:mr-7">
                        <div className="w-5 md:w-8 h-5 md:h-8 border border-[#767676] bg-[#B48F8F]"></div>
                        <p className="text-[10px] md:text-xs mt-1">Natural</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-5 md:w-8 h-5 md:h-8 border border-[#767676] bg-[#D4B44A]"></div>
                        <p className="whitespace-nowrap text-[10px] md:text-xs mt-1">
                          Matte Gold
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex">
                    <p className="text-[#767676] font-bold line-through text-sm md:text-base">
                      $45.57
                    </p>
                    <p className="text-[#09C5B0] font-bold ml-2 text-sm md:text-base">
                      $35.57
                    </p>
                  </div>
                  <button
                    onClick={() => {}}
                    className="mt-3 mb-5 bg-[#1D222A] rounded-xl text-white font-medium py-1.5 md:py-2 px-3 md:px-4 text-sm md:text-base"
                  >
                    Save Frame Selection
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4 rounded-xl lg:rounded-2xl shadow-mobile-card bg-white py-1.5 lg:py-2 px-2 lg:px-3 overflow-hidden">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    className="w-10 lg:w-20 rounded-lg"
                    src={Product2}
                    alt=""
                  />
                  <h1 className="ml-3 sm:ml-4 lg:ml-14 text-xs sm:text-sm lg:text-xl font-bold text-[#2A2A28]">
                    Add Framed Print?
                  </h1>
                </div>
                <div className="flex items-center">
                  <label className="flex items-center text-xs sm:text-sm lg:text-xl font-medium cursor-pointer">
                    <input type="radio" className="mt-0.5 cursor-pointer " />
                    <span className="ml-1 lg:ml-2">Yes</span>
                  </label>

                  <label className="flex items-center text-xs sm:text-sm lg:text-xl font-medium cursor-pointer ml-4 lg:ml-8">
                    <input type="radio" className="mt-0.5 cursor-pointer " />
                    <span className="ml-1 lg:ml-2">No</span>
                  </label>
                </div>
                <img
                  className={`ml-6 mr-1 lg:mr-8 cursor-pointer ${
                    isOpenAccordion.id === "2" && isOpenAccordion.status
                      ? "rotate-180 transition-all"
                      : "rotate-0 transition-all"
                  }`}
                  src={AccordionCollapse}
                  alt=""
                  onClick={() => {
                    setIsOpenAccordion({
                      id: "2",
                      status: !isOpenAccordion.status,
                    });
                  }}
                />
              </div>
              <div
                className={`md:w-2/3 mx-auto ${
                  isOpenAccordion.id === "2" && isOpenAccordion.status
                    ? "h-full transition-all duration-150"
                    : "h-0 transition-all duration-150"
                }`}
              >
                <div className="w-full flex justify-center pb-8 lg:pb-16 border-b-[3px] border-[#FF9728]">
                  <img
                    className="w-44 md:w-auto mt-8"
                    src={Product2Framed}
                    alt=""
                  />
                </div>
                <div className="mt-5 lg:mt-10">
                  <div className="flex justify-between items-baseline mb-6 lg:mb-10">
                    <h1 className="whitespace-nowrap text-sm lg:text-2xl text-[#2A2A28]">
                      Size
                    </h1>
                    <div className="flex text-center items-end">
                      <div>
                        <div className="w-[11px] md:w-[18px] h-[12px] md:h-[20px] border border-[#2A2A28]"></div>
                        <p className="text-[10px] md:text-xs text-[#2A2A28]">
                          8x10
                        </p>
                      </div>
                      <div className="flex flex-col items-center ml-3 md:ml-4">
                        <div className="w-[11px] md:w-[17px] h-[16px] md:h-[26px] border border-[#2A2A28]"></div>
                        <p className="text-[10px] md:text-xs text-[#2A2A28]">
                          11x14
                        </p>
                      </div>
                      <div className="flex flex-col items-center ml-3 md:ml-4">
                        <div className="w-[13px] md:w-[21px] h-[13px] md:h-[21px] border border-[#2A2A28]"></div>
                        <p className="text-[10px] md:text-xs text-[#2A2A28]">
                          12x12
                        </p>
                      </div>
                      <div className="flex flex-col items-center ml-3 md:ml-4">
                        <div className="w-[20px] md:w-[33px] h-[20px] md:h-[33px] border border-[#2A2A28]"></div>
                        <p className="text-[10px] md:text-xs text-[#2A2A28]">
                          16x16
                        </p>
                      </div>
                      <div className="flex flex-col items-center ml-3 md:ml-4">
                        <div className="w-[15px] md:w-[23px] h-[20px] md:h-[30px] border border-[#2A2A28]"></div>
                        <p className="text-[10px] md:text-xs text-[#2A2A28]">
                          16x20
                        </p>
                      </div>
                      <div className="flex flex-col items-center ml-3 md:ml-4">
                        <div className="w-[17px] md:w-[27px] h-[24px] md:h-[37px] border border-[#2A2A28]"></div>
                        <p className="text-[10px] md:text-xs text-[#2A2A28]">
                          20x30
                        </p>
                      </div>
                      <div className="flex flex-col items-center ml-3 md:ml-4">
                        <div className="w-[20px] md:w-[31px] h-[31px] md:h-[47px] border border-[#2A2A28]"></div>
                        <p className="text-[10px] md:text-xs text-[#2A2A28]">
                          24x36
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-8 lg:mb-16">
                    <h1 className="whitespace-nowrap text-sm lg:text-2xl text-[#2A2A28]">
                      Frame Colour{" "}
                    </h1>
                    <div className="flex text-center items-end">
                      <div className="flex flex-col items-center mr-3 md:mr-7">
                        <div className="w-5 md:w-8 h-5 md:h-8 border border-[#767676] bg-black"></div>
                        <p className="text-[10px] md:text-xs mt-1">Black</p>
                      </div>
                      <div className="flex flex-col items-center mr-3 md:mr-7">
                        <div className="w-5 md:w-8 h-5 md:h-8 border border-[#767676]"></div>
                        <p className="text-[10px] md:text-xs mt-1">White</p>
                      </div>
                      <div className="flex flex-col items-center mr-3 md:mr-7">
                        <div className="w-5 md:w-8 h-5 md:h-8 border border-[#767676] bg-[#964B00]"></div>
                        <p className="text-[10px] md:text-xs mt-1">Brown</p>
                      </div>
                      <div className="flex flex-col items-center mr-3 md:mr-7">
                        <div className="w-5 md:w-8 h-5 md:h-8 border border-[#767676] bg-[#B48F8F]"></div>
                        <p className="text-[10px] md:text-xs mt-1">Natural</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-5 md:w-8 h-5 md:h-8 border border-[#767676] bg-[#D4B44A]"></div>
                        <p className="whitespace-nowrap text-[10px] md:text-xs mt-1">
                          Matte Gold
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex">
                    <p className="text-[#767676] font-bold line-through text-sm md:text-base">
                      $45.57
                    </p>
                    <p className="text-[#09C5B0] font-bold ml-2 text-sm md:text-base">
                      $35.57
                    </p>
                  </div>
                  <button
                    onClick={() => {}}
                    className="mt-3 mb-5 bg-[#1D222A] rounded-xl text-white font-medium py-1.5 md:py-2 px-3 md:px-4 text-sm md:text-base"
                  >
                    Save Frame Selection
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4 rounded-xl lg:rounded-2xl shadow-mobile-card bg-white py-1.5 lg:py-2 px-2 lg:px-3 overflow-hidden">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    className="w-10 lg:w-20 rounded-lg"
                    src={Product3}
                    alt=""
                  />
                  <h1 className="ml-3 sm:ml-4 lg:ml-14 text-xs sm:text-sm lg:text-xl font-bold text-[#2A2A28]">
                    Add Framed Print?
                  </h1>
                </div>
                <div className="flex items-center">
                  <label className="flex items-center text-xs sm:text-sm lg:text-xl font-medium cursor-pointer">
                    <input type="radio" className="mt-0.5 cursor-pointer " />
                    <span className="ml-1 lg:ml-2">Yes</span>
                  </label>

                  <label className="flex items-center text-xs sm:text-sm lg:text-xl font-medium cursor-pointer ml-4 lg:ml-8">
                    <input type="radio" className="mt-0.5 cursor-pointer " />
                    <span className="ml-1 lg:ml-2">No</span>
                  </label>
                </div>
                <img
                  className={`ml-6 mr-1 lg:mr-8 cursor-pointer opacity-0`}
                  src={AccordionCollapse}
                  alt=""
                />
              </div>
           
            </div>
            <div className="mt-4 rounded-xl lg:rounded-2xl shadow-mobile-card bg-white py-1.5 lg:py-2 px-2 lg:px-3 overflow-hidden">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    className="w-10 lg:w-20 rounded-lg"
                    src={Product4}
                    alt=""
                  />
                  <h1 className="ml-3 sm:ml-4 lg:ml-14 text-xs sm:text-sm lg:text-xl font-bold text-[#2A2A28]">
                    Add Framed Print?
                  </h1>
                </div>
                <div className="flex items-center">
                  <label className="flex items-center text-xs sm:text-sm lg:text-xl font-medium cursor-pointer">
                    <input type="radio" className="mt-0.5 cursor-pointer " />
                    <span className="ml-1 lg:ml-2">Yes</span>
                  </label>

                  <label className="flex items-center text-xs sm:text-sm lg:text-xl font-medium cursor-pointer ml-4 lg:ml-8">
                    <input type="radio" className="mt-0.5 cursor-pointer " />
                    <span className="ml-1 lg:ml-2">No</span>
                  </label>
                </div>
                <img
                  className={`ml-6 mr-1 lg:mr-8 cursor-pointer opacity-0`}
                  src={AccordionCollapse}
                  alt=""
                />
              </div>
             
            </div>
          </div>
          <div className="flex justify-end mt-10">
            <button
              onClick={() => {
                navigate("/orders");
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

export default FramedPrints;
