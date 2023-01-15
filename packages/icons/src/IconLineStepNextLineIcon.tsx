import * as React from "react";
import { IconProps } from "./types";

export const IconLineStepNextLineIcon = React.forwardRef<
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
        d="M26.7312 6.15103C25.9823 6.45984 25.4936 7.18992 25.4936 8V15.062C20.1048 15.5213 15.4172 17.7011 11.5118 21.5812C7.16365 25.9011 4.66836 31.2902 4.01061 37.6496C3.92013 38.5244 4.41175 39.3557 5.22196 39.6978C6.03216 40.04 6.9708 39.8127 7.53473 39.1378C11.8868 33.9295 15.4239 31.4066 18.1394 30.8418C20.7169 30.3056 23.1656 30.1411 25.4936 30.3326V38C25.4936 38.8198 25.9939 39.5566 26.756 39.859C27.518 40.1614 28.3874 39.9681 28.9495 39.3713L43.4559 23.9701C44.1956 23.1848 44.1791 21.9543 43.4187 21.1891L28.9123 6.59028C28.3413 6.01565 27.4801 5.84221 26.7312 6.15103ZM39.2175 22.636L29.4936 32.9597V28.5615C29.4936 27.5793 28.7804 26.7424 27.8106 26.5868C24.4539 26.0479 20.9533 26.1708 17.3247 26.9256C14.8595 27.4384 12.3354 28.8827 9.75085 31.1026C10.8267 28.6055 12.3542 26.3828 14.331 24.4188L14.3311 24.4188C17.9559 20.8175 22.3106 19.0111 27.5091 18.9708C28.6076 18.9623 29.4936 18.0694 29.4936 16.9709V12.8502L39.2175 22.636Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
});

export default IconLineStepNextLineIcon;
