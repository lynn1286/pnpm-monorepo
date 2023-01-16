import * as React from "react";
import { IconProps } from "./types";

export const IconLoading = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M24 5V9C15.7157 9 9 15.7157 9 24C9 32.2843 15.7157 39 24 39C32.1794 39 38.8297 32.4532 38.9968 24.3138L39 24H43C43 34.4934 34.4934 43 24 43C13.5066 43 5 34.4934 5 24C5 13.6194 13.3246 5.18317 23.6622 5.00294L24 5Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default IconLoading;
