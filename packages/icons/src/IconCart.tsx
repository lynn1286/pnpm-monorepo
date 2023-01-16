import * as React from "react";
import { IconProps } from "./types";

export const IconCart = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.6914 7.794L5.97031 4.9704L4.2 8.55732L9.04215 10.947L13.8025 34.2042L13.8426 34.3657C14.0898 35.2112 14.8678 35.8032 15.7619 35.8032H37.4016V31.8032L17.3942 31.803L16.945 29.6104L36.14 29.6105L36.2993 29.6042C37.1416 29.5374 37.8588 28.9445 38.0751 28.1158L41.4746 14.9522L41.5062 14.8116C41.7342 13.5949 40.8008 12.4469 39.5395 12.4469L13.4275 12.4468L12.7656 9.18648L12.7251 9.02381C12.5684 8.48988 12.1949 8.04252 11.6914 7.794ZM14.2455 16.4468L36.9496 16.4464L34.5942 25.61L16.127 25.6104L14.2455 16.4468ZM15.4466 43C16.9079 43 18.0925 41.8168 18.0925 40.3571C18.0925 38.8975 16.9079 37.7143 15.4466 37.7143C13.9853 37.7143 12.8007 38.8975 12.8007 40.3571C12.8007 41.8168 13.9853 43 15.4466 43ZM37.7468 40.3571C37.7468 41.8168 36.5622 43 35.1009 43C33.6396 43 32.455 41.8168 32.455 40.3571C32.455 38.8975 33.6396 37.7143 35.1009 37.7143C36.5622 37.7143 37.7468 38.8975 37.7468 40.3571Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default IconCart;