import * as React from "react";
import { IconProps } from "./types";

export const IconImageAdd = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M41.9949 8.82373C41.9037 7.24892 40.5977 6 39 6H9L8.82373 6.00509C7.24892 6.09634 6 7.40232 6 9V39L6.00509 39.1763C6.09634 40.7511 7.40232 42 9 42H24V38H10V10H38V24H42V9L41.9949 8.82373ZM33 37V43H37V37H43V33H37V27H33V33H27V37H33ZM35 17V24H30V30H25V35H13V33L21 24L25 28L35 17ZM19 19V13H13V19H19Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default IconImageAdd;
