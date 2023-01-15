import * as React from "react";
import { IconProps } from "./types";

export const IconFillProductsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M32.048 15.0526H37.0557C37.7606 15.0528 38.3451 15.5989 38.3935 16.3026L39.9968 39.5657C40.0224 39.9367 39.8929 40.3017 39.6393 40.5736C39.3857 40.8455 39.0307 40.9999 38.6591 41H9.34093C8.96926 40.9999 8.6143 40.8455 8.36071 40.5736C8.10712 40.3017 7.97765 39.9367 8.00317 39.5657L9.60652 16.3026C9.65492 15.5989 10.2394 15.0528 10.9443 15.0526H15.952C15.952 10.6053 19.5552 7 24 7C28.4448 7 32.048 10.6053 32.048 15.0526ZM16.7264 27.0528C16.233 27.0528 15.7794 27.3237 15.5453 27.7582C15.3113 28.1928 15.3345 28.7208 15.6059 29.1331C17.3922 32.0595 20.5729 33.8438 24 33.8421C27.5528 33.8421 30.6656 31.9578 32.3941 29.1331C32.7808 28.5006 32.5818 27.6742 31.9497 27.2873C31.3175 26.9003 30.4916 27.0994 30.1049 27.7319C28.8062 29.8605 26.4933 31.1586 24.0009 31.1579C21.5084 31.1591 19.1951 29.8613 17.896 27.7328C17.6569 27.3125 17.2107 27.0529 16.7273 27.0528H16.7264ZM18.6346 15.0526C18.6346 12.0877 21.0368 9.68421 24 9.68421C26.9632 9.68421 29.3654 12.0877 29.3654 15.0526H18.6346Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default IconFillProductsIcon;
