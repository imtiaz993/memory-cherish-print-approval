import Product1 from "../Assets/images/product1.png";
import Product2 from "../Assets/images/product2.png";
import Product3 from "../Assets/images/product3.png";
import Product4 from "../Assets/images/product4.png";
import Product1Framed from "../Assets/images/product1Framed.png";
import Product2Framed from "../Assets/images/product2Framed.png";
import VisaIcon from "../Assets/icons/visa.png";
import MasterCardIcon from "../Assets/icons/mastercard.png";


export const fee = {
    normal: "0",
    urgent: "29.00",
    mostUrgent: "0",
  };

 export const coatingFee = 9;
 export const finishFee = 9;
 export  const sizePrice = {
    size4x6: 10,
    size5x7: 15,
    size8x10: 25,
    size11x14: 34,
    size16x20: 49,
  };

export const products = [
    {
      img: Product1,
      id: "1",
      framedImage:Product1Framed
    },
    {
      img: Product2,
      id: "2",
      framedImage:Product2Framed
    },
    {
      img: Product3,
      id: "3",
      framedImage:Product1Framed
    },
    {
      img: Product4,
      id: "4",
      framedImage:Product2Framed
    },
  ];

  export const sizes = [
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
export const cards = [
    {
      number: "**** **** **** 7464",
      expiry: "12/26",
      cvv: "",
      cardIcon: VisaIcon,
    },
    {
      number: "**** **** **** 5863",
      expiry: "12/25",
      cvv: "",
      cardIcon: MasterCardIcon,
    },
  ];