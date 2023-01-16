import * as React from "react";
import { IconProps } from "./types";

export const MirrorHorizontalIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M30.2099 9.2969L41.3183 35.5528C42.0069 37.1806 41.2456 39.0582 39.618 39.7468C39.2235 39.9138 38.7995 39.9998 38.3712 39.9998H28.7996C27.0323 39.9998 25.5996 38.567 25.5996 36.7998V10.232C25.5996 8.90655 26.6741 7.83203 27.9996 7.83203C28.9637 7.83203 29.8343 8.40897 30.2099 9.2969Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M22.4012 10.2323V36.8001C22.4012 38.5673 20.9685 40.0001 19.2012 40.0001H9.62969C7.86238 40.0001 6.42969 38.5673 6.42969 36.8001C6.42969 36.3717 6.51569 35.9477 6.68259 35.5533L17.7909 9.29715C18.3074 8.07642 19.7156 7.5055 20.9364 8.02196C21.8243 8.39762 22.4012 9.26816 22.4012 10.2323Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
          fillOpacity=".3"
        />
      </svg>
    );
  }
);

export default MirrorHorizontalIcon;
