import * as React from "react";
import { IconProps } from "./types";

export const PasteIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M30 13C31.5977 13 32.9037 14.2489 32.9949 15.8237L33 16V40C33 41.5977 31.7511 42.9037 30.1763 42.9949L30 43H10C8.40232 43 7.09634 41.7511 7.00509 40.1763L7 40V16C7 14.4023 8.24892 13.0963 9.82373 13.0051L10 13H30ZM29 39V17H11V39H29ZM23.5625 9H20V5H23.5625V9ZM33.0625 9H25.9375V5H33.0625V9ZM37 9H35.4375V5H39C40.1046 5 41 5.89543 41 7V9H37ZM37 16.6667V10.9167H41V16.6667H37ZM37 24.3333V18.5833H41V24.3333H37ZM37 30V26.25H41V30H37Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default PasteIcon;
