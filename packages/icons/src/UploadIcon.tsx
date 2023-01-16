import * as React from "react";
import { IconProps } from "./types";

export const UploadIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M33.9142 16.0858L24 6.17157L14.0858 16.0858L16.9142 18.9142L21.9998 13.8286L22 33H26L25.9998 13.8286L31.0858 18.9142L33.9142 16.0858ZM11 38V34H7V42H41V34H37V38H11Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default UploadIcon;
