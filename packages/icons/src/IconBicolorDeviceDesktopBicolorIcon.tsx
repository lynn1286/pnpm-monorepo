import * as React from "react";
import { IconProps } from "./types";

export const IconBicolorDeviceDesktopBicolorIcon = React.forwardRef<
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
        d="M36.7778 8C39.7233 8 42.1111 10.3878 42.1111 13.3333V36.4444H43.8889C44.8707 36.4444 45.6667 37.2404 45.6667 38.2222C45.6667 39.204 44.8707 40 43.8889 40H4.77778C3.79594 40 3 39.204 3 38.2222C3 37.2404 3.79594 36.4444 4.77778 36.4444H6.55556V13.3333C6.55556 10.3878 8.94338 8 11.8889 8H36.7778ZM11.8872 11.5558H36.776L36.9833 11.5677C37.8676 11.6704 38.5538 12.4218 38.5538 13.3336V31.1113H10.1094V13.3336L10.1213 13.1262C10.224 12.2421 10.9754 11.5558 11.8872 11.5558ZM21.3454 34.0266C20.7563 34.0266 20.2787 34.5042 20.2787 35.0933C20.2787 35.6824 20.7563 36.1599 21.3454 36.1599H27.7454C28.3345 36.1599 28.8121 35.6824 28.8121 35.0933C28.8121 34.5042 28.3345 34.0266 27.7454 34.0266H21.3454Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        d="M20.2787 35.0933C20.2787 34.5042 20.7563 34.0266 21.3454 34.0266H27.7454C28.3345 34.0266 28.812 34.5042 28.812 35.0933C28.812 35.6824 28.3345 36.1599 27.7454 36.1599H21.3454C20.7563 36.1599 20.2787 35.6824 20.2787 35.0933Z"
        fill={color}
        fillOpacity=".3"
      />
    </svg>
  );
});

export default IconBicolorDeviceDesktopBicolorIcon;
