import * as React from "react";
import { IconProps } from "./types";

export const IconLineCheckIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M39.6022 10.0696L42.3979 12.9304L18.9839 35.8123L5.58582 22.4142L8.41424 19.5858L19.016 30.187L39.6022 10.0696Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default IconLineCheckIcon;
