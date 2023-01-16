import * as React from "react";
import { IconProps } from "./types";

export const IconLeftBold = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M29.1684 6.17157L34.8253 11.8284L22.6539 24L34.8253 36.1716L29.1684 41.8284L11.34 24L29.1684 6.17157Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default IconLeftBold;
