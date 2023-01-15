import * as React from "react";
import { IconProps } from "./types";

export const IconLineToolLockedIcon = React.forwardRef<
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
        d="M32.3139 11.9998C32.3137 7.5817 28.732 3.99998 24.3139 3.99983C19.8956 3.99984 16.3138 7.58162 16.3138 11.9999L16.3138 15.9999C16.3138 18.9607 17.9223 21.5459 20.313 22.9292L20.3138 11.9999C20.3139 9.79071 22.1047 7.99989 24.3138 7.99996L24.5332 8.00587C26.6403 8.11979 28.3139 9.86434 28.3137 12L28.3142 22.9295C30.7052 21.5463 32.3138 18.9609 32.3138 15.9999L32.3139 11.9998ZM24.3144 15.4992C25.419 15.4992 26.3144 16.3946 26.3144 17.4992L26.3145 30.4992C26.3144 31.6038 25.419 32.4992 24.3145 32.4992C23.2098 32.4991 22.3145 31.6038 22.3145 30.4993L22.3145 17.4992C22.3144 16.3946 23.2099 15.4992 24.3144 15.4992ZM20.313 25.0707L20.3138 36.0001C20.3137 38.2091 22.1045 40 24.3138 40C26.5228 40 28.3137 38.2091 28.3137 36L28.314 25.0703C30.7052 26.4537 32.3137 29.0389 32.3137 32L32.3137 36C32.3137 40.4183 28.732 44 24.3137 44C19.8954 44 16.3137 40.4182 16.3137 36L16.3137 32C16.3137 29.0392 17.9222 26.4541 20.313 25.0707Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
});

export default IconLineToolLockedIcon;
