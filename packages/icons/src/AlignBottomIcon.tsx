import * as React from "react";
import { IconProps } from "./types";

export const AlignBottomIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M25.9999 5.99997 25.9999 31.0002 21.9999 31.0002 21.9999 5.99997 25.9999 5.99997ZM42 40.0004 5.99998 40.0004 5.99998 36.0004 42 36.0004 42 40.0004Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M18.4641 25.0002L29.5362 25.0002C29.9216 25.0002 30.1383 25.4507 29.9018 25.7599L24.585 32.7094C24.2884 33.0971 23.712 33.0971 23.4153 32.7094L18.0986 25.7599C17.862 25.4507 18.0788 25.0002 18.4641 25.0002Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default AlignBottomIcon;
