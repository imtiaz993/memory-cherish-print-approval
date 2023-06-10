import React, { useState } from "react";
import GooglePayIcon from "../../../Assets/icons/google-pay.png";
import ApplePayIcon from "../../../Assets/icons/apple-pay.png";
import PayPalIcon from "../../../Assets/icons/paypal.png";
import CreditCardIcon from "../../../Assets/icons/credit-card.svg";
import VisaIcon from "../../../Assets/icons/visa.png";
import MasterCardIcon from "../../../Assets/icons/mastercard.png";
import CardsIcon from "../../../Assets/icons/cards.png";
import CVVIcon from "../../../Assets/icons/cvv.png";

const PaymentDetails = () => {
  const [payWith, setPayWith] = useState("card");
  const [isNewCard, setIsNewCard] = useState(true);
  return (
    <div className="mt-4 rounded-xl lg:rounded-2xl shadow-mobile-card bg-white py-1.5 lg:py-2 px-2 lg:px-3">
      <h1 className="text-xl lg:text-3xl font-semibold px-6 py-4">
        Payment Details
      </h1>
      <div className="border-t-4 border-[#F7780F] mb-6 lg:mb-10">
        <div className="w-11/12 lg:w-4/5 mx-auto">
          <h1 className="text-lg lg:text-xl font-semibold mt-4 lg:mt-8">
            Express Checkout with
          </h1>
          <div className="grid grid-cols-2 gap-6 mt-4 lg:mt-6 lg:w-11/12 mx-auto">
            <div className="flex justify-center items-center py-2 lg:py-3 px-7 rounded-lg shadow-mobile-card cursor-pointer">
              <img className="w-40" src={GooglePayIcon} alt="" />
            </div>
            <div className="flex justify-center items-center py-2 lg:py-3 px-7 rounded-lg shadow-mobile-card cursor-pointer">
              <img className="w-14" src={ApplePayIcon} alt="" />
            </div>
          </div>
          <div>
            <div className="mt-4 lg:mt-6">
              <p className="text-base lg:text-xl font-semibold text-black mb-2">
                Full Name
              </p>
              <input
                className="w-full rounded-2xl border border-black py-2 px-5 outline-none"
                placeholder="Jonah Rathmer"
                type=""
              />
            </div>
            <div className="mt-4 lg:mt-6">
              <p className="text-base lg:text-xl font-semibold text-black mb-2">
                Country
              </p>
              <input
                className="w-full rounded-2xl border border-black py-2 px-5 outline-none"
                placeholder="United States"
                type=""
              />
            </div>
            <div className="mt-4 lg:mt-6">
              <p className="text-base lg:text-xl font-semibold text-black mb-2">
                Address
              </p>
              <input
                className="w-full rounded-2xl border border-black py-2 px-5 outline-none"
                placeholder="1964 Quiet Valley Lane"
                type=""
              />
            </div>
            <div className="mt-4 lg:mt-6">
              <p className="text-base lg:text-xl font-semibold text-black mb-2">
                Pay With
              </p>
              <div className="grid grid-cols-5 gap-5">
                <div
                  onClick={() => {
                    setPayWith("card");
                  }}
                  className={`col-span-2 rounded-2xl py-1 pl-3 cursor-pointer ${
                    payWith === "card"
                      ? "border-2 border-[#20BBFD] shadow-mobile-card"
                      : "border border-[#000000]"
                  }`}
                >
                  <img src={CreditCardIcon} alt="" />
                  <p className="font-semibold text-base lg:text-xl">Card</p>
                </div>
                <div
                  onClick={() => {
                    setPayWith("paypal");
                  }}
                  className={`flex items-center col-span-3 rounded-2xl py-1 pl-5 cursor-pointer ${
                    payWith === "paypal"
                      ? "border-2 border-[#20BBFD] shadow-mobile-card"
                      : "border border-[#000000]"
                  }`}
                >
                  <img className="w-3/4 md:w-auto" src={PayPalIcon} alt="" />
                </div>
              </div>
            </div>
            {payWith === "card" && (
              <div>
                <div className="mt-4 lg:mt-6">
                  <p className="text-base lg:text-xl font-semibold text-black mb-2">
                    Your Cards
                  </p>
                  <label>
                    <div className="flex justify-between bg-[#F5F5F5] rounded-xl py-3 px-4 mb-3 cursor-pointer">
                      <div className="flex items-center">
                        <input type="radio" />
                        <img
                          className="ml-2 md:ml-6 w-8 md:w-auto"
                          src={VisaIcon}
                          alt=""
                        />
                        <p className="font-medium text-base lg:text-2xl ml-2 md:ml-8">
                          {" "}
                          **** **** **** 7464
                        </p>
                      </div>
                      <div>
                        <p className="text-[#00000080] text-base lg:text-2xl">
                          12/26
                        </p>
                      </div>
                    </div>
                  </label>
                  <label>
                    <div className="flex justify-between bg-[#F5F5F5] rounded-xl py-3 px-4 mb-3 cursor-pointer">
                      <div className="flex items-center">
                        <input type="radio" />
                        <img
                          className="ml-2 md:ml-6 w-8 md:w-auto"
                          src={MasterCardIcon}
                          alt=""
                        />
                        <p className="font-medium text-base lg:text-2xl ml-2 md:ml-8">
                          {" "}
                          **** **** **** 5863
                        </p>
                      </div>
                      <div>
                        <p className="text-[#00000080] text-base lg:text-2xl">
                          12/25
                        </p>
                      </div>
                    </div>
                  </label>
                  <label>
                    <div className="flex justify-between bg-[#F5F5F5] rounded-xl py-3 px-4 mb-3 cursor-pointer">
                      <div className="flex items-center">
                        <input
                          onClick={() => {
                            setIsNewCard(!isNewCard);
                          }}
                          checked={isNewCard}
                          type="radio"
                        />

                        <p className="font-medium text-base lg:text-xl ml-2 md:ml-8">
                          Enter New Card
                        </p>
                      </div>
                      <div>
                        <p className="text-[#00000080] text-base lg:text-2xl">
                          12/25
                        </p>
                      </div>
                    </div>
                  </label>
                </div>
                {isNewCard && (
                  <div className="mt-4 lg:mt-6">
                    <p className="inline-block text-base lg:text-xl font-semibold text-black mb-2  border-b-2 border-black">
                      Card Info:
                    </p>
                    <div className="mt-3 lg:mt-4">
                      <p className="text-base lg:text-xl font-semibold text-black mb-2">
                        Card Number
                      </p>
                      <div className="flex items-center justify-between w-full rounded-2xl border border-black py-2 md:py-3 px-3 md:px-5 ">
                        <input
                          className="w-full pr-2 md:pr-3 outline-none"
                          placeholder="1234 5678 5487 7544"
                          type=""
                        />
                        <img className="h-5 md:h-7" src={CardsIcon} alt="" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 md:gap-8">
                      <div className="mt-2 lg:mt-3">
                        <p className="text-base lg:text-xl font-semibold text-black mb-2">
                          Expiration Date
                        </p>
                        <input
                          className="w-full rounded-2xl border border-black py-2 md:py-3 px-3 md:px-5 outline-none"
                          placeholder="MM/YY"
                          type=""
                        />
                      </div>
                      <div className="mt-2 lg:mt-3">
                        <p className="text-base lg:text-xl font-semibold text-black mb-2">
                          Security Code
                        </p>
                        <div className="flex items-center justify-between w-full rounded-2xl border border-black py-2 md:py-3 px-3 md:px-5 ">
                          <input
                            className="w-full pr-2 md:pr-3 outline-none"
                            placeholder="CVV"
                            type=""
                          />
                          <img className="h-6" src={CVVIcon} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            <div className="md:w-1/2 mx-auto mt-6">
              <button
                onClick={() => {}}
                className="bg-[#FF9728] w-full rounded-full text-xl text-white font-semibold py-3 lg:py-4 px-6 shadow-mobile-card"
              >
                Pay $481.92
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
