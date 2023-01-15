import * as React from "react";
import { IconProps } from "./types";

export const IconLineSearchIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M40 22C40 12.6112 32.3888 5 23 5C13.6112 5 6 12.6112 6 22C6 31.3888 13.6112 39 23 39C26.9734 39 30.6284 37.6368 33.5228 35.3527L40.0858 41.9142L42.9142 39.0858L36.3527 32.5228C38.6368 29.6284 40 25.9734 40 22ZM10 22C10 14.8203 15.8203 9 23 9C30.1797 9 36 14.8203 36 22C36 29.1797 30.1797 35 23 35C15.8203 35 10 29.1797 10 22Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default IconLineSearchIcon;
