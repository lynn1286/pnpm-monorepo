import * as React from "react";
import { IconProps } from "./types";

export const IconLineFlipHorizontallyIcon = React.forwardRef<
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
        d="M22 8H26V12H22V8ZM22 16H26V20H22V16ZM22 28H26V32H22V28ZM22 36H26V40H22V36ZM43 11.9393C43 11.1444 42.0927 10.7102 41.4951 11.2191L27.3301 23.2798C26.89 23.6546 26.89 24.3454 27.3301 24.7202L41.4951 36.7809C42.0927 37.2898 43 36.8556 43 36.0607V11.9393Z"
        fill={color}
      />
      <path
        d="M5 36.0607C5 36.8556 5.90732 37.2898 6.50494 36.7809L20.6699 24.7202C21.1101 24.3454 21.11 23.6546 20.6699 23.2798L6.50493 11.2191C5.90732 10.7102 5 11.1444 5 11.9393V36.0607ZM8.67016 17.944V30.056L15.7827 24L8.67016 17.944Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
});

export default IconLineFlipHorizontallyIcon;
