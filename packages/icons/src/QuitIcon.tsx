import * as React from "react";
import { IconProps } from "./types";

export const QuitIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M37.0674 10.2071C33.662 6.97969 29.0622 5 24 5C13.5066 5 5 13.5066 5 24C5 34.4934 13.5066 43 24 43C29.0622 43 33.662 41.0203 37.0674 37.7929L34.316 34.8895C31.6275 37.4372 27.9963 39 24 39C15.7157 39 9 32.2843 9 24C9 15.7157 15.7157 9 24 9C27.9968 9 31.6284 10.5632 34.317 13.1115L37.0674 10.2071ZM43.5185 22.6984L37.5185 15.6984L34.4815 18.3016L37.65 21.9994L22 22V26L37.65 25.9994L34.4815 29.6984L37.5185 32.3016L43.5185 25.3016L43.6251 25.1659C44.1583 24.4238 44.1227 23.4033 43.5185 22.6984Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default QuitIcon;
