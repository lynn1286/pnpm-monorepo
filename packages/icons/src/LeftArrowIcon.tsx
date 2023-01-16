import * as React from "react";
import { IconProps } from "./types";

export const LeftArrowIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19.5858 10.5858L22.4142 13.4142L13.8286 21.9998L42 22V26L13.8286 25.9998L22.4142 34.5858L19.5858 37.4142L6.17157 24L19.5858 10.5858Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default LeftArrowIcon;
