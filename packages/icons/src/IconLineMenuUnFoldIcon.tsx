import * as React from "react";
import { IconProps } from "./types";

export const IconLineMenuUnFoldIcon = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = "currentColor", ...props }, forwardedRef) => {
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
        d="M6 13H42V9H6V13ZM16.5 24L6 17.2V30.8L16.5 24ZM6 39H42V35H6V39ZM42 26H22V22H42V26Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
});

export default IconLineMenuUnFoldIcon;
