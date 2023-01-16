import * as React from "react";
import { IconProps } from "./types";

export const TextBoldIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M24.5 7C29.7467 7 34 11.2533 34 16.5C34 18.7615 33.2098 20.8385 31.8904 22.4698L31.792 22.586L31.8415 22.6043C35.3597 23.9265 37.8857 27.276 37.9962 31.2295L38 31.5C38 36.6562 33.8921 40.853 28.7705 40.9962L28.5 41H15C13.4023 41 12.0963 39.7511 12.0051 38.1763L12 38V10C12 8.40232 13.2489 7.09634 14.8237 7.00509L15 7H24.5ZM16 37H28.5C31.5376 37 34 34.5376 34 31.5C34 28.5365 31.6562 26.1205 28.7212 26.0044L28.5 26H16V37ZM24.5 22H16V11H24.5L24.7212 11.0044C27.6562 11.1205 30 13.5365 30 16.5C30 19.5376 27.5376 22 24.5 22Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default TextBoldIcon;
