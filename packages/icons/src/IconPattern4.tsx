import * as React from "react";
import { IconProps } from "./types";

export const IconPattern4 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.5 5C6.22386 5 6 5.22386 6 5.5V20.5C6 20.7761 6.22386 21 6.5 21H9.5C9.77614 21 10 20.7761 10 20.5V17H12C15.3137 17 18 14.3137 18 11 18 7.68629 15.3137 5 12 5H6.5ZM10 13H12C13.1046 13 14 12.1046 14 11 14 9.89543 13.1046 9 12 9H10V13ZM6.5 43C6.22386 43 6 42.7761 6 42.5V27.5C6 27.2239 6.22386 27 6.5 27H9.5C9.77614 27 10 27.2239 10 27.5V31H12C15.3137 31 18 33.6863 18 37 18 40.3137 15.3137 43 12 43H6.5ZM10 35H12C13.1046 35 14 35.8954 14 37 14 38.1046 13.1046 39 12 39H10V35ZM41.5 5C41.7761 5 42 5.22386 42 5.5V20.5C42 20.7761 41.7761 21 41.5 21H38.5C38.2239 21 38 20.7761 38 20.5V17H36C32.6863 17 30 14.3137 30 11 30 7.68629 32.6863 5 36 5H41.5ZM38 13H36C34.8954 13 34 12.1046 34 11 34 9.89543 34.8954 9 36 9H38V13ZM41.5 43C41.7761 43 42 42.7761 42 42.5V27.5C42 27.2239 41.7761 27 41.5 27H38.5C38.2239 27 38 27.2239 38 27.5V31H36C32.6863 31 30 33.6863 30 37 30 40.3137 32.6863 43 36 43H41.5ZM38 35H36C34.8954 35 34 35.8954 34 37 34 38.1046 34.8954 39 36 39H38V35Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default IconPattern4;
