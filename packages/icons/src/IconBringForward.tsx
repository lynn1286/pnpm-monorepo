import * as React from "react";
import { IconProps } from "./types";

export const IconBringForward = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
    return (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mm-icon"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M32.0395 12.5095L25.3336 6.50952C24.5661 5.8228 23.4026 5.83119 22.6451 6.52891L16.1308 12.5289L18.8407 15.4711L24.0195 10.7011L29.3723 15.4905L32.0395 12.5095Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M26 29V10H22V29H26Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M25.1534 41.6339C24.4619 42.122 23.5381 42.122 22.8466 41.6339L5.84664 29.6339C5.3497 29.2832 5.03941 28.7253 5.0035 28.1181C4.96758 27.5109 5.20995 26.9203 5.66208 26.5134L10.3475 22.2966L13.3379 24.9866L10.2 27.8107L24 37.5519L37.8 27.8107L34.6621 24.9866L37.6748 22.3166L42.3379 26.5134C42.7901 26.9203 43.0324 27.5109 42.9965 28.1181C42.9606 28.7253 42.6503 29.2832 42.1534 29.6339L25.1534 41.6339Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default IconBringForward;
