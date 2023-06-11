import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Stepper from "../../Common/Stepper";
import OrderSummary from "./Components/OrderSummary";
import PaymentDetails from "./Components/PaymentDetails";

const Order = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart);
  console.log(state)
  return (
    <div className="lg:flex justify-between">
      <Stepper />
      <div className="lg:w-[calc(100%-360px)] lg:bg-[#FBF4E3]">
        <div className="w-11/12 xl:w-4/5 mx-auto mb-10">
          <h1 className="mt-8 lg:mt-32 mb-6 lg:mb-12 text-3xl lg:text-4xl font-semibold text-black text-center">
            3. Order Summery & Payment
          </h1>
          <div>
            <OrderSummary />
            <PaymentDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
