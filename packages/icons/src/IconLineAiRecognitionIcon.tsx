import * as React from "react";
import { IconProps } from "./types";

export const IconLineAiRecognitionIcon = React.forwardRef<
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
        d="M40 42H32V38H38V32H42V40C42 41.1046 41.1046 42 40 42ZM10 38V32H6V40C6 41.1046 6.89543 42 8 42H16L16 38H10ZM10 10H16L16 6H8C6.89543 6 6 6.89543 6 8V16H10V10ZM38 10V16H42V8C42 6.89543 41.1046 6 40 6H32V10H38ZM20.2 16H22.9778V12.5H21.7C20.8716 12.5 20.2 13.1716 20.2 14V16ZM24.7 16H29.8111V12.5H24.7V16ZM35.0056 14.25V17.5H31.5056V12.5H33.2556C34.2221 12.5 35.0056 13.2835 35.0056 14.25ZM31.5056 19.0833V23.9167H35.0056V19.0833H31.5056ZM31.5056 25.5V29.5H33.5056C34.334 29.5 35.0056 28.8284 35.0056 28V25.5H31.5056ZM15.2 18.25C14.2335 18.25 13.45 19.0335 13.45 20V33.25C13.45 34.2165 14.2335 35 15.2 35H27.2C28.1665 35 28.95 34.2165 28.95 33.25V20C28.95 19.0335 28.1665 18.25 27.2 18.25H15.2ZM16.95 31.5V21.75H25.45V31.5H16.95Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
});

export default IconLineAiRecognitionIcon;
