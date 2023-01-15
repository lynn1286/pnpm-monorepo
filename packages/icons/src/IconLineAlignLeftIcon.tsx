import * as React from "react";
import { IconProps } from "./types";

export const IconLineAlignLeftIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M42.0002 22.0003 17 22.0003 17 26.0003 42.0002 26.0003V22.0003ZM7.99979 6.00018 7.99979 42.0002H11.9998L11.9998 6.00018 7.99979 6.00018Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M23 29.5361V18.4639C23 18.0786 22.5494 17.8618 22.2402 18.0984L15.2908 23.4152C14.9031 23.7118 14.9031 24.2882 15.2908 24.5848L22.2402 29.9016C22.5494 30.1382 23 29.9214 23 29.5361Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default IconLineAlignLeftIcon;
