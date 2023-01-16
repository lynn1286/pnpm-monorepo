import * as React from "react";
import { IconProps } from "./types";

export const AsPublicIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M42 42H5.99999V38H42V42Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M12.5 21V40H8.49999V21H12.5ZM39.5 21V40H35.5V21H39.5ZM22.8466 5.36606C23.5381 4.87798 24.4619 4.87798 25.1534 5.36606L42.1534 17.3661C42.8653 17.8686 43.1699 18.7744 42.9063 19.605 42.6426 20.4357 41.8715 21 41 21H6.99999C6.1285 21 5.35734 20.4357 5.0937 19.605 4.83006 18.7744 5.13465 17.8686 5.84662 17.3661L22.8466 5.36606ZM13.3014 17H34.6985L24 9.44808 13.3014 17Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M17.5 19C17.5 17.8954 18.3954 17 19.5 17H28.5C29.6046 17 30.5 17.8954 30.5 19V39H26.5V21H21.5V39H17.5V19Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default AsPublicIcon;
