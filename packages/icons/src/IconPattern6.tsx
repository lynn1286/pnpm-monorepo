import * as React from "react";
import { IconProps } from "./types";

export const IconPattern6 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M29.917 44C29.441 41.1623 26.973 39 24 39H18.5C18.2239 39 18 39.2239 18 39.5V44H22V43H24C24.7403 43 25.3866 43.4022 25.7324 44H29.917ZM29.917 4C29.441 6.83771 26.973 9 24 9H22V12.5C22 12.7761 21.7761 13 21.5 13H18.5C18.2239 13 18 12.7761 18 12.5V4H22V5H24C24.7403 5 25.3866 4.5978 25.7324 4H29.917Z"
          fill={color}
        />
        <path
          d="M18.5 18C18.2239 18 18 18.2239 18 18.5V33.5C18 33.7761 18.2239 34 18.5 34H21.5C21.7761 34 22 33.7761 22 33.5V30H24C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18H18.5ZM22 26H24C25.1046 26 26 25.1046 26 24C26 22.8954 25.1046 22 24 22H22V26Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default IconPattern6;
