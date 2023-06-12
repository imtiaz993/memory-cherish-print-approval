import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Stepper from "../../Common/Stepper";
import Accordion from "./Components/Accordion";
import { updatePrints } from "../../redux/cartSlice";
import { useState } from "react";

const FramedPrints = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.value);
  const [framedPrints, setFramedPrints] = useState([...state.prints]);

  console.log(state)

  const handleSubmit = (e) => {
    dispatch(updatePrints(framedPrints))
    navigate("/order");
  };

  return (
    <div className="lg:flex justify-between">
      <Stepper />
      <div className="lg:w-[calc(100%-360px)] lg:bg-[#FBF4E3]">
        <div className="w-11/12 xl:w-4/5 mx-auto mb-10">
          <h1 className="mt-8 lg:mt-32 mb-6 lg:mb-12 text-3xl lg:text-4xl font-semibold text-black text-center">
            Add Your Framed Prints
          </h1>
          <Accordion framedPrints={framedPrints} setFramedPrints={setFramedPrints}/>
          <div className="flex justify-end mt-10">
            <button
              onClick={() => {
                handleSubmit()
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
