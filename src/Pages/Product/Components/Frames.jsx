import React from "react";

const Frames = ({ productDetails, setProductDetails }) => {
  return (
    <div>
      <p className="mt-10 lg:mt-20 text-lg lg:text-xl font-bold">
        Are you interested in adding frames to your prints?
      </p>
      <div className="mt-4">
        <div className="shadow-mobile-card  lg:shadow-none  bg-white rounded-xl py-2 px-3">
          <label className="flex items-center text-base font-medium cursor-pointer">
            <input
              checked={productDetails.frames === true}
              onClick={() => {
                setProductDetails({
                  ...productDetails,
                  frames: true,
                });
              }}
              type="radio"
              className="mt-0.5 cursor-pointer "
            />
            <span className="ml-5">Yes</span>
          </label>
        </div>
        <div className="shadow-mobile-card  lg:shadow-none mt-3 bg-white rounded-xl py-2 px-3">
          <label className="flex items-center text-base font-medium cursor-pointer">
            <input
              checked={productDetails.frames === false}
              onClick={() => {
                setProductDetails({
                  ...productDetails,
                  frames: false,
                });
              }}
              type="radio"
              className="mt-0.5 cursor-pointer "
            />
            <span className="ml-5">No</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Frames;
