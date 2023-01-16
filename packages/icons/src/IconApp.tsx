import * as React from "react";
import { IconProps } from "./types";

export const IconApp = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.5 6H19.5C20.8807 6 22 7.11929 22 8.5V19.5C22 20.8807 20.8807 22 19.5 22H8.5C7.11929 22 6 20.8807 6 19.5V8.5C6 7.11929 7.11929 6 8.5 6ZM18 18V10H10V18H18ZM39.5 6H28.5C27.1193 6 26 7.11929 26 8.5V19.5C26 20.8807 27.1193 22 28.5 22H39.5C40.8807 22 42 20.8807 42 19.5V8.5C42 7.11929 40.8807 6 39.5 6ZM38 18V10H30V18H38ZM19.5 26H8.5C7.11929 26 6 27.1193 6 28.5V39.5C6 40.8807 7.11929 42 8.5 42H19.5C20.8807 42 22 40.8807 22 39.5V28.5C22 27.1193 20.8807 26 19.5 26ZM18 38V30H10V38H18ZM39.5 26H28.5C27.1193 26 26 27.1193 26 28.5V39.5C26 40.8807 27.1193 42 28.5 42H39.5C40.8807 42 42 40.8807 42 39.5V28.5C42 27.1193 40.8807 26 39.5 26ZM38 38V30H30V38H38Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default IconApp;
