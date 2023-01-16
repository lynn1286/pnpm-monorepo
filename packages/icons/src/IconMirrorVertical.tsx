import * as React from "react";
import { IconProps } from "./types";

export const IconMirrorVertical = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.4468 6.68113L38.7028 17.7894C39.9236 18.3059 40.4946 19.7142 39.978 20.9349C39.6024 21.8228 38.7318 22.3998 37.7678 22.3998H11.2C9.43269 22.3998 8 20.9671 8 19.1998V9.62822C8 7.86091 9.43269 6.42822 11.2 6.42822C11.6284 6.42822 12.0523 6.51422 12.4468 6.68113Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
          fillOpacity=".3"
        />
        <path
          d="M12.4468 41.3186L38.7028 30.2103C39.9236 29.6938 40.4946 28.2856 39.978 27.0648C39.6024 26.1769 38.7318 25.6 37.7678 25.6H11.2C9.43269 25.6 8 27.0327 8 28.8V38.3715C8 40.1388 9.43269 41.5715 11.2 41.5715C11.6284 41.5715 12.0523 41.4855 12.4468 41.3186Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default IconMirrorVertical;
