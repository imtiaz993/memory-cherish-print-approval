import React from "react";
import Logo from "../../Assets/icons/logo.svg";
import ActiveStep1 from "../../Assets/icons/active-step-1.svg";
import NonActiveStep2 from "../../Assets/icons/nonactive-step-2.svg";
import NonActiveStep3 from "../../Assets/icons/nonactive-step-3.svg";

const Home = () => {
  return (
    <div className="lg:flex justify-between">
      <div className="lg:w-[360px] lg:mr-11 mt-5">
        <div className="w-3/4 mx-auto lg:mx-0 lg:ml-auto">
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
          <div className="flex lg:flex-col lg:items-center justify-center lg:justify-end mt-20">
            <div className="flex lg:flex-col items-center lg:items-end">
              <div className="flex flex-col-reverse lg:flex-row items-end">
                <p className="font-medium text-center flex justify-end text-xs lg:text-base mt-2 lg:mt-0 lg:mr-1 lg:w-36">
                  Delivery
                  <br /> Address
                </p>
                <div className="bg-checked-step bg-contain bg-no-repeat w-10 h-20">
                  <img className="mt-1 ml-1.5" src={ActiveStep1} alt="" />
                </div>
              </div>
              <div className="mt-4 lg:mt-0 -ml-3 md:ml-0 w-20 lg:w-[2px] h-[2px] lg:h-20 bg-[#FF9728] lg:mr-[19px]"></div>
            </div>
            <div className="flex lg:flex-col items-center lg:items-end">
              <div className="flex flex-col-reverse lg:flex-row items-end">
                <p className="font-medium text-center flex justify-end text-xs lg:text-base mt-2 lg:mt-0 lg:mr-1 lg:w-36">
                  Product
                  <br /> Details
                </p>
                <div className="bg-unchecked-step bg-contain bg-no-repeat w-10 h-20">
                  <img className="mt-1 ml-1.5" src={NonActiveStep2} alt="" />
                </div>
              </div>
              <div className="mt-4 lg:mt-0 -ml-3 md:ml-0 w-20 lg:w-[2px] h-[2px] lg:h-20 bg-[#FBF4E3] lg:mr-[19px]"></div>
            </div>
            <div className="flex lg:flex-col items-center lg:items-end">
              <div className="flex flex-col-reverse lg:flex-row items-end">
                <p className="font-medium text-center flex justify-end text-xs lg:text-base mt-2 lg:mt-0 lg:mr-1 lg:w-36">
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
      </div>
      <div className="lg:w-[calc(100%-360px)] lg:bg-[#FBF4E3]">
        <div className="w-11/12 lg:w-4/5 mx-auto mb-10 lg:mb-20">
          <h1 className="mt-32 mb-12 text-3xl lg:text-4xl font-semibold text-black text-center">
            1. Delivery Address
          </h1>
          <form>
            <div className="grid lg:grid-cols-2 gap-5 lg:gap-8 mb-5">
              <div>
                <p className="text-base text-black mb-2">First name</p>
                <input
                  className="w-full rounded-xl border border-[#767676] py-3 px-5 outline-none"
                  placeholder="Jonah "
                  type=""
                />
              </div>
              <div>
                <p className="text-base text-black mb-2">Last name</p>
                <input
                  className="w-full rounded-xl border border-[#767676] py-3 px-5 outline-none"
                  placeholder="Rathmer"
                  type=""
                />
              </div>
            </div>
            <div className="mb-5">
              <p className="text-base text-black mb-2">Shipping Adress</p>
              <input
                className="w-full rounded-xl border border-[#767676] py-3 px-5 outline-none"
                placeholder="15205 North Kierland Blvd. Suite 100. Scottsdale."
                type=""
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-5 lg:gap-8 mb-5">
              <div>
                <p className="text-base text-black mb-2">Phone Number</p>
                <input
                  className="w-full rounded-xl border border-[#767676] py-3 px-5 outline-none"
                  placeholder="+1 | 234-567-8912"
                  type=""
                />
              </div>
              <div>
                <p className="text-base text-black mb-2">State/Province</p>
                <input
                  className="w-full rounded-xl border border-[#767676] py-3 px-5 outline-none"
                  placeholder="California"
                  type=""
                />
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-5 lg:gap-8 mb-5">
              <div>
                <p className="text-base text-black mb-2">City</p>
                <input
                  className="w-full rounded-xl border border-[#767676] py-3 px-5 outline-none"
                  placeholder="Los Angeles"
                  type=""
                />
              </div>
              <div>
                <p className="text-base text-black mb-2">ZIP/Postal Code</p>
                <input
                  className="w-full rounded-xl border border-[#767676] py-3 px-5 outline-none"
                  placeholder="90213"
                  type=""
                />
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <button className="bg-[#FF9728] rounded-xl text-xl text-white font-semibold py-3 px-6">
                Select My Order Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
