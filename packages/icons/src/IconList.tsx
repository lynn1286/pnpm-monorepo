import * as React from "react";
import { IconProps } from "./types";

export const IconList = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 11H10V15H6V11ZM14 11H42V15H14V11ZM6 22H10V26H6V22ZM14 22H42V26H14V22ZM6 33H10V37H6V33ZM14 33H42V37H14V33Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default IconList;
