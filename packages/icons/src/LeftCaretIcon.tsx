import * as React from "react";
import { IconProps } from "./types";

export const LeftCaretIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.9942 23.2151L30.3804 10.2787C30.8138 9.93645 31.4427 10.0104 31.7849 10.4439C31.9242 10.6204 32 10.8387 32 11.0635V36.9364C32 37.4887 31.5523 37.9364 31 37.9364C30.7751 37.9364 30.5568 37.8607 30.3804 37.7213L13.9942 24.7849C13.5607 24.4427 13.4867 23.8138 13.8289 23.3804C13.8774 23.319 13.9328 23.2635 13.9942 23.2151Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default LeftCaretIcon;
