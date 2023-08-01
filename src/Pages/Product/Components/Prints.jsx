import React, { useEffect } from "react";
import RemoveIcon from "../../../Assets/icons/remove.svg";
import AddIcon from "../../../Assets/icons/add.svg";
import { products, sizes } from "../../../Data/utils";

const Prints = ({ prints, setPrints, fetchedInfo }) => {
  const updatePrints = (index, key, value) => {
    setPrints((prevFramedPrints) => {
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
    const tempArray = [];
    fetchedInfo.map((item, index) => {
      tempArray.push({
        [`product${index}`]: {
          size4x6: { qty: item.size["4x6"] || 0, min: item.size["4x6"] || 0 },
          size5x7: { qty: item.size["5x7"] || 0, min: item.size["5x7"] || 0 },
          size8x10: {
            qty: item.size["8x10"] || 0,
            min: item.size["8x10"] || 0,
          },
          size11x14: {
            qty: item.size["11x14"] || 0,
            min: item.size["11x14"] || 0,
          },
          size16x20: {
            qty: item.size["16x20"] || 0,
            min: item.size["16x20"] || 0,
          },
          image: item.urls[0],
        },
      });
    });
    setPrints([...tempArray]);
  }, []);

  // const updatePrint = (index, key, value) => {
  //   const updatedFramedPrints = prints.map((product, i) => {
  //     if (i === index) {
  //       const keys = Object.keys(product);
  //       const productKey = keys[0];
  //       const productData = product[productKey];

  //       if (value === 0) {
  //         const updatedProductData = { ...productData };
  //         delete updatedProductData[key];

  //         return { [productKey]: updatedProductData };
  //       } else {
  //         return {
  //           [productKey]: { ...productData, [key]: value },
  //         };
  //       }
  //     } else {
  //       return product;
  //     }
  //   });

  //   dispatch(updatePrints(updatedFramedPrints));
  //   setPrints(updatedFramedPrints);
  // };

  return (
    <div>
      <div className="lg:flex justify-between mt-5 lg:mt-8 mb-12">
        <p className="text-lg lg:text-xl font-bold whitespace-nowrap">
          Would you like to add more prints?
        </p>
        <p className="text-base text-[#6B6E76] lg:ml-6">
          Select exactly how many you would like for each photo.
        </p>
      </div>
      <div className="grid grid-cols-6">
        <div className="bg-[#FFEBDD] rounded-tl-xl md:border-b-2 md:border-[#C0BDB7] md:border-opacity-30 border-y md:border-y-0 md:border-l-0 border-l border-[#767676]">
          <div className="">
            <div className=" h-20 flex ml-2 items-center"></div>
          </div>
        </div>
        {sizes.map((item, ind) => {
          const key = Object.keys(item)[0];
          const sizeObject = item[key];
          return (
            <div
              className={`md:border-b-2 pb-4 md:pb-0 md:border-[#C0BDB7] md:border-opacity-30 border-y md:border-y-0 md:border-l-0 border-l border-[#767676] ${
                ind % 2 === 1 ? "bg-[#EFEFEF] bg-opacity-50" : "bg-white"
              } ${ind === sizes.length - 1 && "rounded-tr-xl border-r"}`}
            >
              <div className="">
                <div className="flex flex-col justify-center pl-2 md:pl-3 pr-2 md:pr-4 h-20 pb-2">
                  <h1 className="text-[#323640] text-xs md:text-lg font-semibold">
                    {sizeObject.size} Print
                  </h1>
                  <p className="text-[#6B6E76] text-[10px] md:text-sm mt-1 md:mt-0">
                    ${sizeObject.price} per photo
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {prints.length > 0 &&
        prints.map((item, index) => {
          const productKey = Object.keys(item)[0];
          const product = item[productKey];
          return (
            <div
              className={`select-none  ${
                index !== prints.length - 1 &&
                "md:border-b-2 md:border-[#C0BDB7]"
              } md:border-opacity-30  grid grid-cols-6`}
            >
              <div
                className={`${
                  index === prints.length - 1 && "rounded-bl-xl "
                } bg-[#FFEBDD]  border-b md:border-b-0 border-[#767676] border-l md:border-l-0 `}
              >
                <div className="">
                  <div className="h-20 flex ml-2 items-center rounded-lg overflow-hidden">
                    <img
                      className="w-4/5 md:w-auto"
                      src={product.image}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {sizes.map((size, ind) => {
                const key = Object.keys(size)[0];
                const value = Number(prints[index][`product${index}`][key].qty);
                const minValue = prints[index][`product${index}`][key].min;
                return (
                  <div
                    className={`relative ${
                      index === prints.length - 1 &&
                      ind === sizes.length - 1 &&
                      "rounded-br-xl overflow-hidden"
                    } md:border-l-0 border-b md:border-b-0 border-l  border-[#767676] ${
                      ind % 2 === 1 ? "bg-[#EFEFEF] bg-opacity-50" : "bg-white"
                    }
                ${ind === sizes.length - 1 && "  border-r md:border-r-0"}
              
                `}
                  >
                    {minValue > 0 && (
                      <p className="absolute -top-7 md:-top-5 left-1 md:left-2 text-[#000] font-bold text-center text-[8px] md:text-xs">
                        Already paid for {minValue}
                      </p>
                    )}
                    <div className="flex items-center justify-between pl-1 sm:pl-2 pr-1 sm:pr-4 h-20">
                      <div
                        onClick={() => {
                          if (value > 0 && value > minValue) {
                            updatePrints(index, key, {
                              qty: value - 1,
                              min: minValue,
                            });
                          }
                        }}
                        className="w-4 sm:w-7 h-4 sm:h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center"
                      >
                        <img
                          className="w-3/5 sm:w-auto "
                          src={RemoveIcon}
                          alt=""
                        />
                      </div>
                      <h1 className="text-[#6B6E76] text-lg font-semibold">
                        {value}
                      </h1>
                      <div
                        onClick={() => {
                          updatePrints(index, key, {
                            qty: value + 1,
                            min: minValue,
                          });
                        }}
                        className="w-4 sm:w-7 h-4 sm:h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center"
                      >
                        <img
                          className="w-3/5 sm:w-auto "
                          src={AddIcon}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
    </div>
  );
};

export default Prints;
