import React from "react";

const FrameWidget = ({ color = "black", width="220px", height="269px" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 220 269"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1_4)">
        <rect x="4" width="212" height="261" rx="4" fill={color} />
      </g>
      <rect x="27" y="22" width="168" height="217" fill="white" />
      <defs>
        <filter
          id="filter0_d_1_4"
          x="0"
          y="0"
          width="220"
          height="269"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_4"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default FrameWidget;
