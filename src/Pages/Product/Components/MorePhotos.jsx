import React from "react";

const MorePhotos = ({ productDetails, setProductDetails }) => {
  return (
    <div>
      <p className="mt-10 lg:mt-16 text-lg lg:text-xl font-bold">
      Do you have more photos to send to us in the future? 
      </p>
      <div className="mt-4">
        <div className="shadow-mobile-card  lg:shadow-none  bg-white rounded-xl py-2 px-3">
          <label className="flex items-center text-base font-medium cursor-pointer">
            <input  checked={productDetails.morePhotos===true}
          onClick={() => {
            setProductDetails({
              ...productDetails,
              morePhotos: true,
            });
          }} type="radio" className="mt-0.5 cursor-pointer " />
            <span className="ml-5">Yes</span>
          </label>
        </div>
        <div className="shadow-mobile-card  lg:shadow-none mt-3 bg-white rounded-xl py-2 px-3">
          <label className="flex items-center text-base font-medium cursor-pointer">
            <input checked={productDetails.morePhotos===false}
          onClick={() => {
            setProductDetails({
              ...productDetails,
              morePhotos: false,
            });
          }} type="radio" className="mt-0.5 cursor-pointer " />
            <span className="ml-5">No</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default MorePhotos;
