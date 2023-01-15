import * as React from "react";
import { IconProps } from "./types";

export const IconLineSkinIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18.8284 5L19.4142 5.58579C21.0678 7.23935 22.5891 8 24 8C25.4109 8 26.9322 7.23935 28.5858 5.58579L29.1716 5H40C41.6569 5 43 6.34315 43 8V24C43 25.6569 41.6569 27 40 27H38V39C38 40.5977 36.7511 41.9037 35.1763 41.9949L35 42H13C11.3431 42 10 40.6569 10 39V27H8C6.40232 27 5.09634 25.7511 5.00509 24.1763L5 24V8C5 6.34315 6.34315 5 8 5H18.8284ZM39 23V9H30.799L30.5638 9.21088C28.5664 10.9571 26.4775 11.911 24.3102 11.9941L24 12C21.7216 12 19.5287 11.0402 17.4362 9.21088L17.2 9H9V23H14V38H34V23H39Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default IconLineSkinIcon;
