import * as React from "react";
import { IconProps } from "./types";

export const IconMinus = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M42 22V26H6V22H42Z" fill={color} />
      </svg>
    );
  }
);

export default IconMinus;
