import * as React from "react";
import { IconProps } from "./types";

export const IconLineCornerLeftUpIcon = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = "currentColor", ...props }, forwardedRef) => {
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
        d="M16.5858 8.58579C17.3668 7.80474 18.6332 7.80474 19.4142 8.58579L27.4142 16.5858L24.5858 19.4142L18 12.8284L11.4142 19.4142L8.58578 16.5858L16.5858 8.58579Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        d="M20 10V33C20 33.5523 20.4477 34 21 34H40V38H21C18.2385 38 16 35.7615 16 33V10H20Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
});

export default IconLineCornerLeftUpIcon;
