import * as React from "react";
import { IconProps } from "./types";

export const IconLineStepBackLineIcon = React.forwardRef<
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
        d="M21.2688 6.15103C22.0177 6.45984 22.5064 7.18992 22.5064 8V15.062C27.8952 15.5213 32.5828 17.7011 36.4882 21.5812C40.8363 25.9011 43.3316 31.2902 43.9894 37.6496C44.0799 38.5244 43.5882 39.3557 42.778 39.6978C41.9678 40.04 41.0292 39.8127 40.4653 39.1378C36.1132 33.9295 32.5761 31.4066 29.8606 30.8418C27.2831 30.3056 24.8344 30.1411 22.5064 30.3326V38C22.5064 38.8198 22.0061 39.5566 21.244 39.859C20.482 40.1614 19.6126 39.9681 19.0505 39.3713L4.54413 23.9701C3.80444 23.1848 3.82089 21.9543 4.5813 21.1891L19.0877 6.59028C19.6587 6.01565 20.5199 5.84221 21.2688 6.15103ZM8.78253 22.636L18.5064 32.9597V28.5615C18.5064 27.5793 19.2196 26.7424 20.1894 26.5868C23.5461 26.0479 27.0467 26.1708 30.6753 26.9256C33.1405 27.4384 35.6646 28.8827 38.2492 31.1026C37.1733 28.6055 35.6458 26.3828 33.669 24.4188L33.6689 24.4188C30.0441 20.8175 25.6894 19.0111 20.4909 18.9708C19.3924 18.9623 18.5064 18.0694 18.5064 16.9709V12.8502L8.78253 22.636Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
});

export default IconLineStepBackLineIcon;
