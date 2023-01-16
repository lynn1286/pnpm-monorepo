import * as React from "react";
import { IconProps } from "./types";

export const IconTextUnderline = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15 22V6H11V22L11.0036 22.3069C11.1666 29.3448 16.9229 35 24 35C31.1797 35 37 29.1797 37 22V6H33V22L32.9962 22.2654C32.8558 27.1132 28.8818 31 24 31C19.0294 31 15 26.9706 15 22ZM38 42V38H10V42H38Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default IconTextUnderline;
