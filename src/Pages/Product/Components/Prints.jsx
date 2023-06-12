import React, { useEffect } from "react";
import Product1 from "../../../Assets/images/product1.png";
import Product2 from "../../../Assets/images/product2.png";
import Product3 from "../../../Assets/images/product3.png";
import Product4 from "../../../Assets/images/product4.png";
import RemoveIcon from "../../../Assets/icons/remove.svg";
import AddIcon from "../../../Assets/icons/add.svg";

const Prints = ({ prints, setPrints }) => {
  const products = [
    {
      img: Product1,
      id: "1",
    },
    {
      img: Product2,
      id: "2",
    },
    {
      img: Product3,
      id: "3",
    },
    {
      img: Product4,
      id: "4",
    },
  ];
console.log(prints)
  const sizes = [
    {
      size4x6: {
        size: "4x6",
        price: "10",
      },
    },
    {
      size5x7: {
        size: "5x7",
        price: "15",
      },
    },
    {
      size8x10: {
        size: "8x10",
        price: "25",
      },
    },
    {
      size11x14: {
        size: "11x14",
        price: "34",
      },
    },
    {
      size16x20: {
        size: "16x20",
        price: "49",
      },
    },
  ];

  const updatePrints = (index, key, value) => {
    console.log("TESTING VALUE1", value)
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
    products.map((item, index) => {
      tempArray.push({
        [`product${index}`]: {
          size4x6: 0,
          size5x7: 0,
          size8x10: 0,
          size11x14: 0,
          size16x20: 0,
        },
      });
    });
    setPrints([...tempArray]);
  }, []);
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
        <div className="bg-[#FFEBDD] rounded-tl-xl">
          <div className="">
            <div className="h-20 flex ml-2 items-center"></div>
          </div>
        </div>
        {sizes.map((item, ind) => {
          const key = Object.keys(item)[0];
          const sizeObject = item[key];
          return (
            <div
              className={`${
                ind % 2 === 1 ? "bg-[#EFEFEF] bg-opacity-50" : "bg-white"
              } ${ind === sizes.length - 1 && "rounded-tr-xl"}`}
            >
              <div className="">
                <div className="flex flex-col justify-center pl-2 md:pl-3 pr-2 md:pr-4 h-20 pb-2">
                  <h1 className="text-[#323640] text-xs md:text-lg font-semibold">
                    {sizeObject.size} Print
                  </h1>
                  <p className="text-[#6B6E76] text-[10px] md:text-sm mt-1 md:mt-0">
                    {sizeObject.price} per photo
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {prints.length>0 && products.map((item, index) => (
        <div className="grid grid-cols-6">
          <div
            className={`bg-[#FFEBDD] ${
              index === products.length - 1 && "rounded-bl-xl"
            }`}
          >
            <div className="">
              <div className="h-20 flex ml-2 items-center rounded-lg overflow-hidden">
                <img className="w-4/5 md:w-auto" src={item.img} alt="" />
              </div>
            </div>
          </div>
          {sizes.map((size, ind) => {
            const key = Object.keys(size)[0];
            const value =prints[index][`product${index}`][key];
            return (
              <div
                className={`${
                  ind % 2 === 1 ? "bg-[#EFEFEF] bg-opacity-50" : "bg-white"
                } ${
                  index === products.length - 1 &&
                  ind === sizes.length - 1 &&
                  "rounded-br-xl"
                }`}
              >
                <div className="flex items-center justify-between pl-1 sm:pl-2 pr-1 sm:pr-4 h-20">
                  <div
                    onClick={() => {
                      if(value>0){
                        updatePrints(index, key, value-1);
                      }
                    }}
                    className="w-4 sm:w-7 h-4 sm:h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center"
                  >
                    <img className="w-3/5 sm:w-auto " src={RemoveIcon} alt="" />
                  </div>
                  <h1 className="text-[#6B6E76] text-lg font-semibold">{value}</h1>
                  <div
                    onClick={() => {
                      updatePrints(index, key, value+1);
                    }}
                    className="w-4 sm:w-7 h-4 sm:h-7 bg-[#DAD6CE] cursor-pointer rounded flex justify-center items-center"
                  >
                    <img className="w-3/5 sm:w-auto " src={AddIcon} alt="" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Prints;
