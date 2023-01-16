import * as React from "react";
import { IconProps } from "./types";

export const IconImage = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M41.9949 8.82373C41.9037 7.24892 40.5977 6 39 6H9L8.82373 6.00509C7.24892 6.09634 6 7.40232 6 9V39L6.00509 39.1763C6.09634 40.7511 7.40232 42 9 42H39L39.1763 41.9949C40.7511 41.9037 42 40.5977 42 39V9L41.9949 8.82373ZM10 10H38V38H10V10ZM35 19V35H13L21 26L25 30L35 19ZM19 19V13H13V19H19Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default IconImage;
