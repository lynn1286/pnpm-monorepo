import * as React from "react";
import { IconProps } from "./types";

export const IconTextAlignCenter = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5 7H43V11H5V7ZM14 17H34V21H14V17ZM14 37H34V41H14V37ZM7 27H41V31H7V27Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default IconTextAlignCenter;
