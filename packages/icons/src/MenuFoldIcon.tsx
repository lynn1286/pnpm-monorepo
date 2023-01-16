import * as React from "react";
import { IconProps } from "./types";

export const MenuFoldIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.2 13H42.2V9H6.2V13ZM5.4 23.8L15.9 30.6V17L5.4 23.8ZM6.2 39H42.2V35H6.2V39ZM42.2 26H22.2V22H42.2V26Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default MenuFoldIcon;
