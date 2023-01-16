import * as React from "react";
import { IconProps } from "./types";

export const IconCloseCircleFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4ZM29.0858 16.0858L23.9998 21.1718L18.9142 16.0858L16.0858 18.9142L21.1718 23.9998L16.0858 29.0858L18.9142 31.9142L23.9998 26.8278L29.0858 31.9142L31.9142 29.0858L26.8278 23.9998L31.9142 18.9142L29.0858 16.0858Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default IconCloseCircleFill;
