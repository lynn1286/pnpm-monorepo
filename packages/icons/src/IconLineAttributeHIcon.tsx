import * as React from "react";
import { IconProps } from "./types";

export const IconLineAttributeHIcon = React.forwardRef<
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
      <path d="M12 8H16V40H12V8ZM32 8H36V40H32V8Z" fill={color} />
      <path d="M13 26L13 22L35 22V26L13 26Z" fill={color} />
    </svg>
  );
});

export default IconLineAttributeHIcon;
