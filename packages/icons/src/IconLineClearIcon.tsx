import * as React from "react";
import { IconProps } from "./types";

export const IconLineClearIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.9207 12.5827C16.722 12.0776 17.7663 12.1945 18.4362 12.8643L35.1357 29.5638C35.8055 30.2336 35.9224 31.2779 35.4172 32.0793L28.4991 43.0535C28.1702 43.5751 27.6219 43.9188 27.0091 43.9874C26.3963 44.056 25.7855 43.842 25.3495 43.406L4.594 22.6505C4.15797 22.2144 3.94401 21.6037 4.0126 20.9909C4.08119 20.3781 4.42487 19.8297 4.94652 19.5009L15.9207 12.5827ZM16.7135 16.8776L9.2575 21.5779L26.422 38.7425L31.1223 31.2865L16.7135 16.8776Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M35.818 9.97997 30.732 15.066C30.3517 15.4463 29.8359 15.66 29.298 15.66 28.7602 15.66 28.2443 15.4463 27.864 15.066L21.694 8.89603 18.081 12.5091 35.4909 29.919 39.104 26.3059 32.934 20.136C32.5537 19.7556 32.34 19.2398 32.34 18.702 32.34 18.1641 32.5537 17.6483 32.934 17.2679L38.02 12.1819 35.818 9.97997ZM37.2521 5.67793 42.3221 10.7479C42.7024 11.1283 42.916 11.6441 42.916 12.1819 42.916 12.7198 42.7024 13.2356 42.3221 13.616L37.236 18.702 43.406 24.8719C44.198 25.6639 44.198 26.948 43.406 27.74L36.9249 34.2211C36.1329 35.013 34.8489 35.013 34.0569 34.2211L13.7789 13.9431C12.987 13.1511 12.987 11.8671 13.7789 11.0751L20.26 4.59399C20.6404 4.21366 21.1562 4 21.694 4 22.2319 4 22.7477 4.21366 23.1281 4.59399L29.298 10.7639 34.384 5.67793C35.176 4.88595 36.4601 4.88595 37.2521 5.67793ZM10.9983 25.8089 16.3334 21.7255 18.7986 24.9464 13.4635 29.0298 10.9983 25.8089Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default IconLineClearIcon;
