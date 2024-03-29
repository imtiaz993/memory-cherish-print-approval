import React, { useEffect, useState } from "react";
import AccordionCollapse from "../../../Assets/icons/accordion-collapse.svg";
import { frameNewPrice, frameOldPrice } from "../../../Data/utils";

const Accordion = ({ framedPrints, setFramedPrints }) => {
  console.log(framedPrints);
  const [isOpenAccordion, setIsOpenAccordion] = useState([]);
  const [framed, setFramed] = useState([]);

  const updateFramed = (index, key, value) => {
    setFramedPrints((prevFramedPrints) => {
      const updatedFramedPrints = [...prevFramedPrints];
      const productIndex = index; // Assuming `index` is the index of the product to update

      if (productIndex >= 0 && productIndex < updatedFramedPrints.length) {
        const productKey = `product${productIndex}`;
        const updatedProduct = {
          ...updatedFramedPrints[productIndex][productKey],
          [key]: value,
        };

        updatedFramedPrints[productIndex] = {
          [productKey]: updatedProduct,
        };
      }
      return updatedFramedPrints;
    });
  };

  useEffect(() => {
    setIsOpenAccordion([...framed]);
  }, [framed]);

  useEffect(() => {
    const tempArray = [];
    framedPrints.map((item, index) => {
      tempArray.push({
        [`product${index}`]: {
          ...framedPrints[index][`product${index}`],
          size: "5x7",
          color: "Black",
          framed: true,
        },
      });
    });
    setFramed(framedPrints.map((item, index) => index));
    setFramedPrints([...tempArray]);
  }, []);

  const products = framedPrints.filter((product) => {
    const keys = Object.keys(product);
    const sizeFrames = Object.keys(product[keys[0]]).filter(
      (key) => key.startsWith("size") && key !== "size"
    );
    return sizeFrames.some((sizeFrame) => product[keys[0]][sizeFrame] !== 0);
  });

  const getFrameDimentions = (index) => {
    let dimention = "";
    switch (framedPrints[index]["product" + index].size) {
      case "5x7":
        dimention = " w-[100px]  h-[140px]";
        break;
      case "8x10":
        dimention = "w-[120px] h-[150px]";
        break;
      case "12x12":
        dimention = "w-[144px] h-[144px]";
        break;
      case "11x14":
        dimention = "w-[132px] h-[168px]";
        break;
      case "16x20":
        dimention = "w-[160px] h-[200px]";
        break;
      case "20x30":
        dimention = "w-[180px] h-[220px]";
        break;

      default:
        break;
    }
    return dimention;
  };

  const getFrameColor = (index) => {
    let color = "";
    switch (framedPrints[index]["product" + index].color) {
      case "Black":
        color = "blackFrame";
        break;
      case "White":
        color = "whiteFrame";
        break;
      case "Natural":
        color = "goldFrame";
        break;

      default:
        break;
    }
    return color;
  };
  return (
    <div>
      {framedPrints.length > 0 &&
        products.map((item, index) => {
          const key = Object.keys(item)[0];
          const object = item[key];
          return (
            <div className="mt-4 rounded-xl lg:rounded-2xl shadow-mobile-card bg-white py-1.5 lg:py-2 px-2 lg:px-3 overflow-hidden">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    className="w-10 lg:w-20 rounded-lg"
                    src={object.image}
                    alt=""
                  />
                  <h1 className="ml-3 sm:ml-4 lg:ml-14 text-xs sm:text-sm lg:text-xl font-bold text-[#2A2A28]">
                    Add Framed Print?
                  </h1>
                </div>
                <div className="flex items-center">
                  <label className="flex items-center text-xs sm:text-sm lg:text-xl font-medium cursor-pointer">
                    <input
                      checked={framed.includes(index)}
                      onClick={() => {
                        setFramed([...framed, index]);
                        updateFramed(index, "framed", true);
                      }}
                      type="radio"
                      className="mt-0.5 cursor-pointer "
                    />
                    <span className="ml-1 lg:ml-2">Yes</span>
                  </label>

                  <label className="flex items-center text-xs sm:text-sm lg:text-xl font-medium cursor-pointer ml-4 lg:ml-8">
                    <input
                      checked={!framed.includes(index)}
                      onClick={() => {
                        setFramed(framed.filter((item, ind) => index !== ind));
                        updateFramed(index, "framed", false);
                      }}
                      type="radio"
                      className="mt-0.5 cursor-pointer "
                    />
                    <span className="ml-1 lg:ml-2">No</span>
                  </label>
                </div>
                <img
                  className={`${
                    framed.includes(index) ? "opacity-100" : "opacity-0"
                  } ml-6 mr-1 lg:mr-8 cursor-pointer ${
                    isOpenAccordion.includes(index)
                      ? "rotate-180 transition-all"
                      : "rotate-0 transition-all"
                  }`}
                  src={AccordionCollapse}
                  alt=""
                  onClick={() => {
                    if (isOpenAccordion.includes(index)) {
                      setIsOpenAccordion(
                        isOpenAccordion.filter((item) => item !== index)
                      );
                    } else {
                      setIsOpenAccordion([...isOpenAccordion, index]);
                    }
                  }}
                />
              </div>
              <div
                className={`md:w-2/3 mx-auto ${
                  isOpenAccordion.includes(index)
                    ? "h-full transition-all duration-150"
                    : "h-0 transition-all duration-150"
                }`}
              >
                <div className="w-full relative pt-4 pb-4 border-b-[3px] border-[#FF9728] ">
                  <div className="wall">
                    <div
                      className={`absolute right-[5%] sm:right-[15%] md:right-[20%] 2xl:right-[25%] top-[14%] sm:top-[10%] rounded-[5px] border-[20px] ${getFrameDimentions(
                        index
                      )} ${getFrameColor(index)}`}
                    >
                      <div className="w-full h-full ">
                        <img
                          className="object-cover w-full h-full"
                          src={object.image}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 lg:mt-6">
                  <div className="flex justify-between items-baseline mb-6 lg:mb-10">
                    <h1 className="whitespace-nowrap text-sm lg:text-2xl text-[#2A2A28]">
                      Size
                    </h1>
                    <div className="flex text-center items-end  cursor-pointer">
                      <div>
                        <div
                          onClick={() => {
                            updateFramed(index, "size", "5x7");
                          }}
                          className={`w-[11px] md:w-[18px] h-[12px] md:h-[20px] border  ${
                            framedPrints[index]["product" + index].size ===
                            "5x7"
                              ? "border-[#FF9728]"
                              : "border-[#767676]"
                          }`}
                        ></div>
                        <p className="text-[10px] md:text-xs text-[#2A2A28]">
                        5x7
                        </p>
                      </div>
                      <div
                        onClick={() => {
                          updateFramed(index, "size", "8x10");
                        }}
                        className="flex flex-col items-center ml-3 md:ml-4 cursor-pointer"
                      >
                        <div
                          className={`w-[11px] md:w-[17px] h-[16px] md:h-[26px] border  ${
                            framedPrints[index]["product" + index].size ===
                            "8x10"
                              ? "border-[#FF9728]"
                              : "border-[#767676]"
                          }`}
                        ></div>
                        <p className="text-[10px] md:text-xs text-[#2A2A28]">
                        8x10
                        </p>
                      </div>
                      <div
                        onClick={() => {
                          updateFramed(index, "size", "12x12");
                        }}
                        className="flex flex-col items-center ml-3 md:ml-4 cursor-pointer"
                      >
                        <div
                          className={`w-[13px] md:w-[21px] h-[13px] md:h-[21px] border  ${
                            framedPrints[index]["product" + index].size ===
                            "12x12"
                              ? "border-[#FF9728]"
                              : "border-[#767676]"
                          }`}
                        ></div>
                        <p className="text-[10px] md:text-xs text-[#2A2A28]">
                          12x12
                        </p>
                      </div>
                      <div
                        onClick={() => {
                          updateFramed(index, "size", "11x14");
                        }}
                        className="flex flex-col items-center ml-3 md:ml-4 cursor-pointer"
                      >
                        <div
                          className={`w-[20px] md:w-[33px] h-[20px] md:h-[33px] border  ${
                            framedPrints[index]["product" + index].size ===
                            "11x14"
                              ? "border-[#FF9728]"
                              : "border-[#767676]"
                          }`}
                        ></div>
                        <p className="text-[10px] md:text-xs text-[#2A2A28]">
                          11x14
                        </p>
                      </div>
                      <div
                        onClick={() => {
                          updateFramed(index, "size", "16x20");
                        }}
                        className="flex flex-col items-center ml-3 md:ml-4 cursor-pointer"
                      >
                        <div
                          className={`w-[15px] md:w-[23px] h-[20px] md:h-[30px] border  ${
                            framedPrints[index]["product" + index].size ===
                            "16x20"
                              ? "border-[#FF9728]"
                              : "border-[#767676]"
                          }`}
                        ></div>
                        <p className="text-[10px] md:text-xs text-[#2A2A28]">
                          16x20
                        </p>
                      </div>
                      <div
                        onClick={() => {
                          updateFramed(index, "size", "20x30");
                        }}
                        className="flex flex-col items-center ml-3 md:ml-4 cursor-pointer"
                      >
                        <div
                          className={`w-[17px] md:w-[27px] h-[24px] md:h-[37px] border  ${
                            framedPrints[index]["product" + index].size ===
                            "20x30"
                              ? "border-[#FF9728]"
                              : "border-[#767676]"
                          }`}
                        ></div>
                        <p className="text-[10px] md:text-xs text-[#2A2A28]">
                          20x30
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-8 lg:mb-16">
                    <h1 className="whitespace-nowrap text-sm lg:text-2xl text-[#2A2A28]">
                      Frame Colour{" "}
                    </h1>
                    <div className="flex text-center items-end">
                      <div
                        onClick={() => {
                          updateFramed(index, "color", "Black");
                        }}
                        className="flex flex-col items-center mr-3 md:mr-7 cursor-pointer"
                      >
                        <div
                          className={`w-5 md:w-8 h-5 md:h-8 ${
                            framedPrints[index]["product" + index].color ===
                            "Black"
                              ? "border-2 border-[#FF9728]"
                              : "border border-[#767676]"
                          } bg-black`}
                        ></div>
                        <p className="text-[10px] md:text-xs mt-1">Black</p>
                      </div>
                      <div
                        onClick={() => {
                          updateFramed(index, "color", "White");
                        }}
                        className="flex flex-col items-center mr-3 md:mr-7 cursor-pointer"
                      >
                        <div
                          className={`w-5 md:w-8 h-5 md:h-8 ${
                            framedPrints[index]["product" + index].color ===
                            "White"
                              ? "border-2 border-[#FF9728]"
                              : "border border-[#767676]"
                          }`}
                        ></div>
                        <p className="text-[10px] md:text-xs mt-1">White</p>
                      </div>
                      <div
                        onClick={() => {
                          updateFramed(index, "color", "Natural");
                        }}
                        className="flex flex-col items-center mr-3 md:mr-7 cursor-pointer"
                      >
                        <div
                          className={`w-5 md:w-8 h-5 md:h-8 ${
                            framedPrints[index]["product" + index].color ===
                            "Natural"
                              ? "border-2 border-[#FF9728]"
                              : "border border-[#767676]"
                          } bg-[#D4B44A]`}
                        ></div>
                        <p className="text-[10px] md:text-xs mt-1">Natural</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex">
                    <p className="text-[#767676] font-bold line-through text-sm md:text-base">
                      ${frameOldPrice}
                    </p>
                    <p className="text-[#09C5B0] font-bold ml-2 text-sm md:text-base">
                      ${frameNewPrice}
                    </p>
                  </div>
                  {/* <button
                    onClick={() => {}}
                    className="mt-3 mb-5 bg-[#1D222A] rounded-xl text-white font-medium py-1.5 md:py-2 px-3 md:px-4 text-sm md:text-base"
                  >
                    Save Frame Selection
                  </button> */}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Accordion;
