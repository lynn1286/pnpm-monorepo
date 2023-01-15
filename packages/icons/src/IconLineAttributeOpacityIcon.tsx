import * as React from "react";
import { IconProps } from "./types";

export const IconLineAttributeOpacityIcon = React.forwardRef<
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
      <path fill={color} d="M8 8H16V16H8z" />
      <path opacity=".5" fill={color} d="M24 8H32V16H24z" />
      <path opacity=".75" fill={color} d="M16 16H24V24H16z" />
      <path opacity=".3" fill={color} d="M32 16H40V24H32z" />
      <path fill={color} d="M8 24H16V32H8z" />
      <path opacity=".5" fill={color} d="M24 24H32V32H24z" />
      <path opacity=".75" fill={color} d="M16 32H24V40H16z" />
      <path opacity=".3" fill={color} d="M32 32H40V40H32z" />
    </svg>
  );
});

export default IconLineAttributeOpacityIcon;
