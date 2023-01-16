import * as React from "react";
import { IconProps } from "./types";

export const IconToolUnlocked = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M32.3139 12.3136C32.3137 7.89548 28.732 4.31376 24.3139 4.31362C19.8956 4.31362 16.3138 7.8954 16.3138 12.3137L16.3138 16.3137C16.3138 19.2745 17.9223 21.8596 20.313 23.243L20.3138 12.3137C20.3139 10.1045 22.1047 8.31368 24.3138 8.31375L24.5332 8.31966C26.6403 8.43357 28.3139 10.1781 28.3137 12.3137L28.3142 23.2433C30.7052 21.8601 32.3138 19.2747 32.3138 16.3137L32.3139 12.3136ZM20.313 25.3845L20.3138 36.3139C20.3137 38.5229 22.1045 40.3137 24.3138 40.3138C26.5228 40.3137 28.3137 38.5229 28.3137 36.3138L28.314 25.3841C30.7052 26.7675 32.3137 29.3527 32.3137 32.3138L32.3137 36.3138C32.3137 40.7321 28.732 44.3138 24.3137 44.3138C19.8954 44.3138 16.3137 40.732 16.3137 36.3137L16.3137 32.3138C16.3137 29.353 17.9222 26.7678 20.313 25.3845Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default IconToolUnlocked;
