import * as React from "react";
import { IconProps } from "./types";

export const IconLineTextAlignLeftIcon = React.forwardRef<
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
        d="M5 7H43V11H5V7ZM5 17H25V21H5V17ZM5 37H25V41H5V37ZM5 27H39V31H5V27Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
});

export default IconLineTextAlignLeftIcon;
