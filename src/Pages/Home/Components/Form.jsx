import React from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  return (
    <div className="lg:w-[calc(100%-360px)] lg:bg-[#FBF4E3]">
      <div className="w-11/12 lg:w-4/5 mx-auto mb-10 lg:mb-20">
        <h1 className="mt-8 lg:mt-32 mb-6 lg:mb-12 text-3xl lg:text-4xl font-semibold text-black text-center">
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
            <textarea
              className="w-full h-20 lg:h-[50px] rounded-xl border border-[#767676] py-3 px-5 outline-none resize-none"
              placeholder="15205 North Kierland Blvd. Suite 100. Scottsdale."
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
            <button
              onClick={() => {
                navigate("/product");
              }}
              className="bg-[#FF9728] rounded-xl text-xl text-white font-semibold py-2 lg:py-3 px-6"
            >
              Select My Order Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
