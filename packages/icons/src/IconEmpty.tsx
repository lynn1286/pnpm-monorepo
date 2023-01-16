import * as React from "react";
import { IconProps } from "./types";

export const IconEmpty = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M26 7H22V15H26V7ZM42 39C42 40.1046 41.1046 41 40 41H8C6.89543 41 6 40.1046 6 39V27.9528L10.4627 21H37.5373L42 27.9528V39ZM35.351 25H12.648L10.722 28L18.083 28.0003C18.5592 30.8379 21.0271 33 24 33C26.9729 33 29.4408 30.8379 29.917 28.0003L37.277 28L35.351 25ZM8.89676 12.2214L11.9609 9.65025L17.1032 15.7786L14.0391 18.3498L8.89676 12.2214ZM36.0391 9.65025L39.1032 12.2214L33.9609 18.3498L30.8968 15.7786L36.0391 9.65025Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default IconEmpty;
