import * as React from "react";
import { IconProps } from "./types";

export const IconLineRetryIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 24C6 14.0589 14.0588 6 24 6C29.3763 6 34.202 8.35702 37.5003 12.0941L37.5 7H41.5V18.5C41.5 18.7761 41.2761 19 41 19H29.5V15L34.7243 15.0001C32.1562 11.9431 28.305 10 24 10C16.268 10 10 16.268 10 24C10 31.732 16.268 38 24 38C28.3506 38 32.2378 36.0154 34.8056 32.9022L38.4553 34.7278C35.1748 39.1408 29.9213 42 24 42C14.0588 42 6 33.9412 6 24Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default IconLineRetryIcon;
