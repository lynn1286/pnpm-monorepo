import * as React from "react";
import { IconProps } from "./types";

export const IconPattern5 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 32V16H8C11.3137 16 14 18.6863 14 22 14 25.3137 11.3137 28 8 28H6V31.5C6 31.7761 5.77614 32 5.5 32H4ZM6 24H8C9.10457 24 10 23.1046 10 22 10 20.8954 9.10457 20 8 20H6V24ZM44 16.3414C43.3744 16.1203 42.7013 16 42 16H36.5C36.2239 16 36 16.2239 36 16.5V31.5C36 31.7761 36.2239 32 36.5 32H39.5C39.7761 32 40 31.7761 40 31.5V28H42C42.7013 28 43.3744 27.8797 44 27.6586V22 16.3414ZM44 22C44 20.8954 43.1046 20 42 20H40V24H42C43.1046 24 44 23.1046 44 22ZM19.5 16C19.2239 16 19 16.2239 19 16.5V31.5C19 31.7761 19.2239 32 19.5 32H22.5C22.7761 32 23 31.7761 23 31.5V28H25C28.3137 28 31 25.3137 31 22 31 18.6863 28.3137 16 25 16H19.5ZM23 24H25C26.1046 24 27 23.1046 27 22 27 20.8954 26.1046 20 25 20H23V24Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default IconPattern5;
