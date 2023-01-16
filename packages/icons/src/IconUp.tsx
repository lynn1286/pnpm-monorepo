import * as React from "react";
import { IconProps } from "./types";

export const IconUp = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M37.5858 32.8284L40.4142 30L24 13.5858L7.58582 30L10.4142 32.8284L24 19.2432L37.5858 32.8284Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default IconUp;
