import React from "react";

const UrgentPolicy = ({ productDetails, setProductDetails }) => {
  return (
    <div className="mt-10 bg-white rounded-xl py-2 pl-3 pr-4">
      <h1 className="text-lg lg:text-xl font-bold lg:w-11/12 mb-2">
        If you are in a rush & need your prints within 24-48 hours, we've got a
        solution for you!
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
        recommend sticking with our studio prints if you can afford to wait a
        bit, as they are of much better quality than the Walgreens/Walmart
        prints.However, if you would like to proceed with the pick up option
        please select the option below & we will schedule the prints for pickup
        near your address & send you an email with instructions.
      </p>
      <label className="flex items-center text-base font-medium cursor-pointer mb-6">
        <input
          checked={productDetails.urgentPolicy}
          onClick={() => {
            setProductDetails({
              ...productDetails,
              urgentPolicy: !productDetails.urgentPolicy,
            });
          }}
          type="radio"
          className="cursor-pointer mt-0.5"
        />
        <span className="w-[calc(100%-20px)] ml-2">
          Yes, please proceed with local pick-up. I have read the above.
        </span>
      </label>
    </div>
  );
};

export default UrgentPolicy;
