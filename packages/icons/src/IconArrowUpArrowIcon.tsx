import * as React from "react";
import { IconProps } from "./types";

export const IconArrowUpArrowIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M26 41.9984L25.9998 13.8284L34.5858 22.4127L37.4142 19.5842L24 6.17001L10.5858 19.5842L13.4142 22.4127L21.9998 13.8284L22 41.9984H26Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default IconArrowUpArrowIcon;
