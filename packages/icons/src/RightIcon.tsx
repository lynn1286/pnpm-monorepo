import * as React from "react";
import { IconProps } from "./types";

export const RightIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.17 10.4184L17.9984 7.59L34.4126 24.0042L17.9984 40.4184L15.17 37.59L28.7552 24.0042L15.17 10.4184Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default RightIcon;
