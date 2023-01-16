import * as React from "react";
import { IconProps } from "./types";

export const IconAttributeY = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.44777 9.2612L12.5522 6.73883L24 20.8284L35.4478 6.73883L38.5522 9.2612L24 27.1716L9.44777 9.2612Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path d="M22 22H26V41H22V22Z" fill={color} />
      </svg>
    );
  }
);

export default IconAttributeY;
