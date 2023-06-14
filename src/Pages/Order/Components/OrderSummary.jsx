import React, { useEffect, useState } from "react";
import RemoveIcon from "../../../Assets/icons/remove.svg";
import AddIcon from "../../../Assets/icons/add.svg";
import CloseIcon from "../../../Assets/icons/close.svg";
import AccordionIcon from "../../../Assets/icons/order-accordion.svg";
import { updatePrints } from "../../../Redux/cartSlice";
import { useDispatch } from "react-redux";
import { fee, coatingFee, finishFee, sizePrice } from "../../../Data/utils";

const OrderSummary = ({ state, prints, setPrints }) => {
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState();

  const [isOpenAccordion, setIsOpenAccordion] = useState(true);

  const [charges, setCharges] = useState();
  const getProducts = () =>
    prints
      .map((product) => {
        const keys = Object.keys(product);
        const productData = product[keys[0]];
        const updatedProductData = {};

        for (const key in productData) {
          if (productData.hasOwnProperty(key) && productData[key] !== 0) {
            updatedProductData[key] = productData[key];
          }
        }

        const count = Object.keys(updatedProductData).reduce(
          (accumulator, currentValue) => {
            if (currentValue.includes("size")) {
              return accumulator + 1;
            } else {
              return accumulator;
            }
          },
          0
        );
        if (count > 1) {
          return { [keys[0]]: updatedProductData };
        } else return undefined;
      })
      .filter((product) => product !== undefined);

  const updatePrint = (index, key, value) => {
    setPrints((prevPrints) => {
      const updatedPrints = prevPrints.map((product, i) => {
        if (i === index) {
          const productKey = `product${i}`;
          const updatedProduct = { ...product[productKey] };

          if (value === 0) {
            delete updatedProduct[key];
          } else {
            updatedProduct[key] = value;
          }

          return { [productKey]: updatedProduct };
        } else {
          return product;
        }
      });
      getTotal();
      dispatch(updatePrints(updatedPrints));
      return updatedPrints;
    });
  };

  const getTotal = (newProducts) => {
    let shippingCharges = 0;
    let finishCharges = 0;
    let coatingCharges = 0;
    let printCharges = 0;
    let totalPrints = 0;
    switch (state.product.shippingTime) {
      case "most-urgent":
        shippingCharges = Number(fee.mostUrgent);
        break;
      case "urgent":
        shippingCharges = Number(fee.urgent);
        break;
      case "normal":
        shippingCharges = Number(fee.normal);
        break;

      default:
        break;
    }

    newProducts &&
      newProducts.length > 0 &&
      newProducts.map((product, index) => {
        const key = Object.keys(product)[0];
        const object = product[key];
        const sizes = [];
        Object.keys(object).forEach((element) => {
          if (element.includes("x") && object[element] > 0) {
            sizes.push(element);
          }
        });
        sizes.map((size) => {
          printCharges = printCharges + sizePrice[size] * object[size];
          totalPrints = totalPrints + object[size];
        });
      });
      coatingCharges = coatingFee * totalPrints;
      finishCharges =  finishFee * totalPrints;
    setTotal(shippingCharges + finishCharges + coatingCharges + printCharges);
    setCharges({
      shippingCharges,
      finishCharges,
      coatingCharges,
      printCharges,
      totalPrints,
    });
  };

  useEffect(() => {
    const newProducts = getProducts();
    setProducts(newProducts);
    getTotal(newProducts);
  }, [prints]);

  return (
    <div
      className={`mt-4 rounded-xl lg:rounded-2xl shadow-mobile-card bg-white py-1.5 lg:py-2 px-2 lg:px-3 overflow-hidden ${
        !isOpenAccordion ? "h-32 lg:h-36" : ""
      }`}
    >
      <h1 className="text-xl lg:text-3xl font-semibold px-6 py-4">
        Order Summary
      </h1>
      <div className="border-y-4 border-[#F7780F] mb-6 lg:mb-10">
        <div className="flex justify-between items-center px-4">
          <div className="flex items-center">
            <div className="w-3 lg:w-4 h-3 lg:h-4 bg-[#DAD6CE] rounded-full"></div>
            <p className="text-lg lg:text-2xl font-medium py-4 pl-3 lg:pl-4">
              Your Order Extras
            </p>
          </div>
          <div>
            <img
              className={`cursor-pointer ${
                isOpenAccordion
                  ? "rotate-0 transition-all"
                  : "rotate-180 transition-all"
              }}`}
              onClick={() => {
                setIsOpenAccordion(!isOpenAccordion);
              }}
              src={AccordionIcon}
              alt=""
            />
          </div>
        </div>
        <div className={`${isOpenAccordion ? "h-auto" : "h-0"}`}>
          <div className="mb-10 lg:mb-20">
            <div className="bg-[#F9F8F6] py-4 px-6 mb-6 grid grid-cols-4 md:grid-cols-5 items-center">
              <p className="col-span-2 md:col-span-3 text-xs md:text-base text-[#6B6E76]">
                Product
              </p>
              <p className="text-center text-xs md:text-base text-[#6B6E76]">
                Qty
              </p>
              <p className="text-right pr-5 md:pr-9 text-xs md:text-base text-[#6B6E76]">
                Price
              </p>
            </div>
            {products &&
              products.length > 0 &&
              products.map((product, index) => {
                const key = Object.keys(product)[0];
                const object = product[key];
                const sizes = [];
                Object.keys(object).forEach((element) => {
                  if (element.includes("x")) {
                    sizes.push(element);
                  }
                });
                return (
                  <div className="py-3 px-2 grid grid-cols-4 md:grid-cols-5 items-center min-h-[80px]">
                    <div className="col-span-2 md:col-span-3 flex items-center">
                      <div className="h-20 flex md:ml-2 items-center rounded-lg overflow-hidden">
                        <img
                          className="w-10 md:w-4/5"
                          src={object.image}
                          alt=""
                        />
                      </div>
                      <div className="ml-2 md:ml-0">
                        {sizes.map((size) => (
                          <p
                            className={`${
                              index !== 0 ? "mt-1 md:mt-0" : ""
                            } text-xs md:text-base text-[#2A2A28] font-bold`}
                          >
                            {size.replace("size", "")} Prints
                          </p>
                        ))}
                      </div>
                    </div>
                    <div>
                      {sizes.map((size, ind) => (
                        <div
                          className={`${
                            ind !== 0 ? "mt-1 md:mt-0" : ""
                          } select-none  flex items-center justify-center md:pr-10`}
                        >
                          <div
                            onClick={() => {
                              if (object[size] > 1) {
                                updatePrint(index, size, object[size] - 1);
                              }
                            }}
                            className="w-5 h-5 bg-[#09BAA6] cursor-pointer rounded flex justify-center items-center"
                          >
                            <img
                              className="w-3/5 sm:w-auto "
                              src={RemoveIcon}
                              alt=""
                            />
                          </div>

                          <h1 className="text-[#6B6E76] text-xs md:text-base px-2">
                            {object[size]}
                          </h1>

                          <div
                            onClick={() => {
                              updatePrint(index, size, object[size] + 1);
                            }}
                            className="w-5 h-5 bg-[#09BAA6] cursor-pointer rounded flex justify-center items-center"
                          >
                            <img
                              className="w-3/5 sm:w-auto "
                              src={AddIcon}
                              alt=""
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div>
                      {sizes.map((size, ind) => {
                        return (
                          <div
                            className={`${
                              ind !== 0 ? "mt-1 md:mt-0" : ""
                            }  select-none  flex items-center justify-end`}
                          >
                            <p className="text-center text-xs md:text-base text-[#6B6E76]">
                              ${sizePrice[size] * object[size]}
                            </p>
                            <div
                              // onClick={() => {
                              //   updatePrint(
                              //     index,
                              //     size,
                              //     object[size] - object[size]
                              //   );
                              // }}
                              className="ml-2 md:ml-8 bg-[#FF9728] cursor-pointer w-5 h-5 rounded-full flex justify-center items-center"
                            >
                              <img src={CloseIcon} alt="" />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            <div className="py-3 px-2 border-t border-[#DAD6CE] grid grid-cols-4 md:grid-cols-5 items-center pl-14 md:pl-[92px] pr-6">
              <p className="col-span-2 md:col-span-3 text-xs md:text-base text-[#2A2A28] font-semibold">
                Express Shipping Fee
              </p>
              <p className="text-center pr-10 "></p>
              <p className="text-right pr-5 md:pr-9 text-xs md:text-base text-[#6B6E76]">
                ${charges?.shippingCharges}
              </p>
            </div>
            <div className="py-3 px-2 border-t border-[#DAD6CE] grid grid-cols-4 md:grid-cols-5 items-center pl-14 md:pl-[92px] pr-6">
              <p className="col-span-2 md:col-span-3 text-xs md:text-base text-[#2A2A28] font-semibold">
                Print Finish ({state.product.finish})
              </p>
              <p className="text-center pr-7 md:pr-16 text-xs md:text-base text-[#6B6E76]">
                x{charges?.totalPrints}
              </p>
              <p className="text-right pr-5 md:pr-9 text-xs md:text-base text-[#6B6E76]">
                ${charges?.finishCharges}
              </p>
            </div>
            {state.product.protectiveCoating && (
              <div className="py-3 px-2 border-t border-[#DAD6CE] grid grid-cols-4 md:grid-cols-5 items-center pl-14 md:pl-[92px] pr-6">
                <p className="col-span-2 md:col-span-3 text-xs md:text-base text-[#2A2A28] font-semibold">
                  Print Protective Coating (All Photos):{" "}
                  <span className="text-[#6B6E76]">
                    {state.product.protectiveCoating ? "YES" : "No"}
                  </span>
                </p>
                <p className="text-center pr-7 md:pr-16 text-xs md:text-base text-[#6B6E76]">
                  x{charges?.totalPrints}
                </p>
                <p className="text-right pr-5 md:pr-9 text-xs md:text-base text-[#6B6E76]">
                  ${charges?.coatingCharges}
                </p>
              </div>
            )}
          </div>
          <div className="flex justify-between mb-4 w-11/12 mx-auto">
            <p className="text-lg lg:text-xl text-[#323640]">Total</p>
            <p className="text-lg lg:text-xl text-[#F7780F]">${total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
