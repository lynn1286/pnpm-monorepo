import * as React from "react";
import { IconProps } from "./types";

export const IconLineAttributeXIcon = React.forwardRef<
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
        d="M34.4 41.2L10.4 9.19999L13.6 6.79999L37.6 38.8L34.4 41.2Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        d="M13.6 41.2L37.6 9.19999L34.4 6.79999L10.4 38.8L13.6 41.2Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
});

export default IconLineAttributeXIcon;
