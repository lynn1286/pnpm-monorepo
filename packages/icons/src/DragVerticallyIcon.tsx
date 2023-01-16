import * as React from "react";
import { IconProps } from "./types";

export const DragVerticallyIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15 7H21V13H15V7ZM15 21H21V27H15V21ZM15 35H21V41H15V35ZM27 7H33V13H27V7ZM27 21H33V27H27V21ZM27 35H33V41H27V35Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default DragVerticallyIcon;
