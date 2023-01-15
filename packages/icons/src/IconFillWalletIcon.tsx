import * as React from "react";
import { IconProps } from "./types";

export const IconFillWalletIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M32.0081 9C34.1503 9 35.8992 10.684 36.0032 12.8004L36.0081 13V16H40.0081C41.1127 16 42.0081 16.8954 42.0081 18V24H34.0081C31.8659 24 30.117 25.684 30.013 27.8004L30.0081 28C30.0081 30.1422 31.6921 31.8911 33.8085 31.9951L34.0081 32H42.0081V38C42.0081 39.1046 41.1127 40 40.0081 40H8.00811C6.90354 40 6.00811 39.1046 6.00811 38L6.00783 16.2813L6.00267 16.0275L6 15.5338L6.00811 14.5C6.00811 11.5365 8.35189 9.12046 11.2869 9.00437L11.5081 9H32.0081ZM35.0081 26C36.1127 26 37.0081 26.8954 37.0081 28C37.0081 29.1046 36.1127 30 35.0081 30C33.9035 30 33.0081 29.1046 33.0081 28C33.0081 26.8954 33.9035 26 35.0081 26ZM11.5081 13H32.0081V16H11.5081L11.3636 15.9931C10.603 15.9204 10.0081 15.2797 10.0081 14.5C10.0081 13.6716 10.6797 13 11.5081 13Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default IconFillWalletIcon;
