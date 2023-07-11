import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../../../Redux/cartSlice";
import PhoneNumber from "./PhoneNumber";

const Form = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.value);
  const [deliveryDetails, setDeliveryDetails] = useState({ ...state.cart });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCart(deliveryDetails));
    navigate("/product");
  };
  useEffect(() => {
    setDeliveryDetails({
      firstname: data.firstName,
      lastname: data.lastName,
      shippingAddress: data.address,
      phoneCode: data.phone,
      phoneNumber: Number(data.phone.slice(2)),
    });
  }, []);

  return (
    <div className="lg:w-[calc(100%-360px)] lg:bg-[#FBF4E3]">
      <div className="w-11/12 lg:w-4/5 mx-auto mb-10 lg:mb-20">
        <h1 className="mt-8 lg:mt-32 mb-6 lg:mb-12 text-3xl lg:text-4xl font-semibold text-black text-center">
          1. Delivery Address
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-2 gap-5 lg:gap-8 mb-5">
            <div>
              <p className="text-base text-black mb-2">First name</p>
              <input
                className="w-full rounded-xl border border-[#767676] py-3 px-5 outline-none"
                placeholder="Jonah "
                type="text"
                onChange={(e) => {
                  setDeliveryDetails({
                    ...deliveryDetails,
                    firstname: e.target.value,
                  });
                }}
                value={deliveryDetails.firstname}
              />
            </div>
            <div>
              <p className="text-base text-black mb-2">Last name</p>
              <input
                className="w-full rounded-xl border border-[#767676] py-3 px-5 outline-none"
                placeholder="Rathmer"
                type="text"
                onChange={(e) => {
                  setDeliveryDetails({
                    ...deliveryDetails,
                    lastname: e.target.value,
                  });
                }}
                value={deliveryDetails.lastname}
              />
            </div>
          </div>
          <div className="mb-5">
            <p className="text-base text-black mb-2">Shipping Adress</p>
            <textarea
              className="w-full h-20 lg:h-[50px] rounded-xl border border-[#767676] py-3 px-5 outline-none resize-none"
              placeholder="15205 North Kierland Blvd. Suite 100. Scottsdale."
              onChange={(e) => {
                setDeliveryDetails({
                  ...deliveryDetails,
                  shippingAddress: e.target.value,
                });
              }}
              value={deliveryDetails.shippingAddress}
            />
          </div>
          <div className="grid lg:grid-cols-2 gap-5 lg:gap-8 mb-5">
            <div>
              <p className="text-base text-black mb-2">Phone Number</p>
              <div className="w-full relative home-phone">
                <PhoneNumber
                  deliveryDetails={deliveryDetails}
                  setDeliveryDetails={setDeliveryDetails}
                />
                <input
                  className="absolute w-full rounded-xl pl-[160px] z-10 py-3 px-5 border border-[#767676] outline-none"
                  placeholder="234-567-8912"
                  type="number"
                  onChange={(e) => {
                    setDeliveryDetails({
                      ...deliveryDetails,
                      phoneNumber: e.target.value,
                    });
                  }}
                  value={deliveryDetails.phoneNumber}
                />
              </div>
            </div>
            <div className="mt-12 lg:mt-1">
              <p className="text-base text-black mb-2">State/Province</p>
              <input
                className="w-full rounded-xl border border-[#767676] py-3 px-5 outline-none"
                placeholder="California"
                type="text"
                onChange={(e) => {
                  setDeliveryDetails({
                    ...deliveryDetails,
                    state: e.target.value,
                  });
                }}
                value={deliveryDetails.state}
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-5 lg:gap-8 mb-5">
            <div>
              <p className="text-base text-black mb-2">City</p>
              <input
                className="w-full rounded-xl border border-[#767676] py-3 px-5 outline-none"
                placeholder="Los Angeles"
                type="text"
                onChange={(e) => {
                  setDeliveryDetails({
                    ...deliveryDetails,
                    city: e.target.value,
                  });
                }}
                value={deliveryDetails.city}
              />
            </div>
            <div>
              <p className="text-base text-black mb-2">ZIP/Postal Code</p>
              <input
                className="w-full rounded-xl border border-[#767676] py-3 px-5 outline-none"
                placeholder="90213"
                type="number"
                onChange={(e) => {
                  setDeliveryDetails({
                    ...deliveryDetails,
                    zip: e.target.value,
                  });
                }}
                value={deliveryDetails.zip}
              />
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <button
              className="bg-[#FF9728] rounded-xl text-xl text-white font-semibold py-2 lg:py-3 px-6"
              type="submit"
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
