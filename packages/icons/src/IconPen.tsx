import * as React from "react";
import { IconProps } from "./types";

export const IconPen = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M33 4.17157L42.8284 14L15.8284 41H6V31.1716L33 4.17157ZM28 14.8286L10 32.828V37H14.17L32.171 18.9996L28 14.8286ZM30.828 11.9996L33 9.829L37.171 14L34.999 16.1706L30.828 11.9996Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default IconPen;
