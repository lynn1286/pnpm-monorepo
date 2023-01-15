import * as React from "react";
import { IconProps } from "./types";

export const IconArrowDownBoldIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M36.1716 13.1716L41.8284 18.8284L24 36.6569L6.17157 18.8284L11.8284 13.1716L24 25.343L36.1716 13.1716Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default IconArrowDownBoldIcon;
