import * as React from "react";
import { IconProps } from "./types";

export const IconPattern = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M23.9153 13.0593L24 13.2304L24.0847 13.0593C27.0145 7.31944 35.4629 7.74604 37.7598 13.836L37.8275 14.0222L43.0769 29.0211C44.4452 32.9304 42.3853 37.2087 38.4761 38.5769C35.3488 39.6715 31.9853 38.5721 30.0644 36.087L30.004 36.0076L29.9917 36.0247C27.0776 39.9494 21.0734 39.9887 18.0975 36.1424L17.9959 36.0076L17.9356 36.087C16.0387 38.541 12.7351 39.6438 9.64127 38.6169L9.52389 38.5769C5.6538 37.2224 3.59623 33.0157 4.88304 29.1385L4.92306 29.0211L10.1725 14.0222C12.3659 7.75528 20.9559 7.26146 23.9153 13.0593Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default IconPattern;
