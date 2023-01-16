import * as React from "react";
import { IconProps } from "./types";

export const AlignCenterVerticallyIcon = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = "currentColor", ...props }, forwardedRef) => {
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
        d="M26.0001 4.00018 26.0001 17.0002 22.0001 17.0002 22.0001 4.00018 26.0001 4.00018ZM22.0001 43.9998 22.0001 30.9998 26.0001 30.9998 26.0001 43.9998 22.0001 43.9998ZM6 21.9996 42 21.9996 42 25.9996 6 25.9996 6 21.9996Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        d="M18.4639 36 29.5361 36C29.9214 36 30.1382 35.5494 29.9016 35.2402L24.5848 28.2908C24.2882 27.903 23.7118 27.903 23.4152 28.2908L18.0984 35.2402C17.8618 35.5494 18.0786 36 18.4639 36ZM18.4639 12 29.5361 12C29.9214 12 30.1382 12.4505 29.9016 12.7597L24.5848 19.7092C24.2882 20.0969 23.7118 20.0969 23.4152 19.7092L18.0984 12.7597C17.8618 12.4505 18.0786 12 18.4639 12Z"
        fill={color}
      />
    </svg>
  );
});

export default AlignCenterVerticallyIcon;
