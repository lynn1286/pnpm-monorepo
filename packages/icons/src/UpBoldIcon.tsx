import * as React from "react";
import { IconProps } from "./types";

export const UpBoldIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M36.1716 34.8253L41.8284 29.1684L24 11.34L6.17157 29.1684L11.8284 34.8253L24 22.6539L36.1716 34.8253Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default UpBoldIcon;
