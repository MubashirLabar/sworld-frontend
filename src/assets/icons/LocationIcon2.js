import React from "react";

function LocationIcon2() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 50 48"
    >
      <g filter="url(#filter0_d_53_209)">
        <path
          fill="currentColor"
          d="M23.73 19.646l-8.105 8.098-8.104-8.098a11.458 11.458 0 1116.208 0zm-8.105-3.938a4.167 4.167 0 100-8.333 4.167 4.167 0 000 8.333zM42.48 38.396l-8.104 8.1-8.104-8.102a11.459 11.459 0 1116.208.002zm-8.104-3.938a4.167 4.167 0 100-8.333 4.167 4.167 0 000 8.333z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d_53_209"
          width="49.667"
          height="54.409"
          x="0.167"
          y="0.087"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_53_209"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_53_209"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default LocationIcon2;
