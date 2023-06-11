import React from "react";
import { useLocation } from "react-router-dom";
import Logo from "../Assets/images/logo.png";
import ActiveStep1 from "../Assets/icons/active-step-1.svg";
import NonActiveStep2 from "../Assets/icons/nonactive-step-2.svg";
import ActiveStep2 from "../Assets/icons/active-step-2.svg";
import NonActiveStep3 from "../Assets/icons/nonactive-step-3.svg";
import ActiveStep3 from "../Assets/icons/active-step-3.svg";

const Stepper = () => {
  const location = useLocation();
  const paths = location.pathname.split("/");
  const currentPath = paths[paths.length - 1];
  const active2 =
    currentPath === "product" ||
    currentPath === "framed-prints" ||
    currentPath === "order";
  const active3 = currentPath === "order";
  console.log(currentPath);
  return (
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
              <div className="relative bottom-10 lg:static bg-checked-step bg-contain bg-no-repeat w-8 lg:w-10 h-16 lg:h-20">
                <img
                  className="mt-1 ml-1.5 w-2/3 lg:w-auto "
                  src={ActiveStep1}
                  alt=""
                />
              </div>
            </div>
            <div className="relative bottom-6 lg:static mt-4 lg:mt-0 -ml-3 md:ml-0 w-28 lg:w-[2px] h-[2px] lg:h-20 bg-[#FF9728] lg:mr-[19px]"></div>
          </div>
          <div className="-ml-4 lg:ml-0 flex lg:flex-col items-center lg:items-end">
            <div className="flex flex-col-reverse lg:flex-row items-end">
              <p className="absolute lg:static font-medium text-center flex justify-end text-xs lg:text-base mt-2 lg:mt-0 lg:mr-1 lg:w-36">
                Product
                <br /> Details
              </p>
              <div
                className={`relative bottom-10 lg:static ${
                  active2 ? "bg-checked-step" : "bg-unchecked-step"
                } bg-contain bg-no-repeat w-8 lg:w-10 h-16 lg:h-20`}
              >
                <img
                  className="mt-1 ml-1.5 w-2/3 lg:w-auto "
                  src={active2 ? ActiveStep2 : NonActiveStep2}
                  alt=""
                />
              </div>
            </div>
            <div
              className={`relative bottom-6 lg:static mt-4 lg:mt-0 -ml-3 md:ml-0 w-28 lg:w-[2px] h-[2px] lg:h-20 ${
                active2 ? "bg-[#FF9728]" : "bg-[#FBF4E3]"
              } lg:mr-[19px]`}
            ></div>
          </div>
          <div className="-ml-4 lg:ml-0 flex lg:flex-col items-center lg:items-end">
            <div className="flex flex-col-reverse lg:flex-row items-end">
              <p className="absolute lg:static font-medium text-center flex justify-end text-xs lg:text-base mt-2 lg:mt-0 lg:mr-1 lg:w-36">
                Order Summery &
                <br /> Payment
              </p>
              <div
                className={`relative bottom-10 lg:static ${
                  active3 ? "bg-checked-step" : "bg-unchecked-step"
                } bg-contain bg-no-repeat w-8 lg:w-10 h-16 lg:h-20`}
              >
                <img
                  className="mt-2 ml-1.5 w-2/3 lg:w-auto "
                  src={active3 ? ActiveStep3 : NonActiveStep3}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Stepper;
