import React, { useState } from "react";
import CheckIcon from "../../../Assets/icons/black-check.svg";

const Shipping = () => {
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
                onClick={() => {
                  setTime("normal");
                }}
                checked={time === "normal"}
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
                onClick={() => {
                  setTime("urgent");
                }}
                checked={time === "urgent"}
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
                onClick={() => {
                  setTime("most-urgent");
                }}
                checked={time === "most-urgent"}
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
      {time === "most-urgent" && (
        <div className="mt-10 bg-white rounded-xl py-2 pl-3 pr-4">
          <h1 className="text-lg lg:text-xl font-bold lg:w-11/12 mb-2">
            If you are in a rush & need your prints within 24-48 hours, we've
            got a solution for you!
          </h1>
          <p className="mb-5">
            We usually ship our prints from our lab in California, but we cannot
            guarantee your parcel will arrive as quickly as you need it if we go
            down that route.
          </p>
          <p className="mb-5">
            To ensure you get your prints on time, we partner with your local
            Walgreens or Walmart to allow you to pick up your prints the same or
            next day, avoiding transit times.
          </p>
          <p className="mb-5">
            There will be a small surcharge.If not absolutely necessary, we
            recommend sticking with our studio prints if you can afford to wait
            a bit, as they are of much better quality than the Walgreens/Walmart
            prints.However, if you would like to proceed with the pick up option
            please select the option below & we will schedule the prints for
            pickup near your address & send you an email with instructions.
          </p>
          <label className="flex items-center text-base font-medium cursor-pointer mb-6">
            <input type="radio" className="cursor-pointer mt-0.5" />
            <span className="w-[calc(100%-20px)] ml-2">
              Yes, please proceed with local pick-up. I have read the above.
            </span>
          </label>
        </div>
      )}
    </>
  );
};

export default Shipping;
