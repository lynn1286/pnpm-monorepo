import * as React from "react";
import { IconProps } from "./types";

export const TailoringIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11 35V5H15V33H43V37H13C11.8954 37 11 36.1046 11 35Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M33 15H21V11H35C36.1046 11 37 11.8954 37 13V27H33V15ZM5 11H13V15H5V11ZM37 35V43H33V35H37Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default TailoringIcon;
