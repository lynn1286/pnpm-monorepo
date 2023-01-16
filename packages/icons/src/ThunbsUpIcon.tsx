import * as React from "react";
import { IconProps } from "./types";

export const ThunbsUpIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M24.2998 6.00031C25 5 25.7998 4 27 4C30 4 30.5 7.99999 30 9.99999C29.5 12 28.4158 16.6889 28 18.0001H37.7233C39.3618 17.9851 40.9247 18.7635 42 20.0001C43.078 21.2398 43.5573 22.8907 43.3108 24.5151L43.3073 24.5375L40.5854 38.3271C40.1621 41.0776 37.7826 43.1 35 43.0748L16.0002 42.9998C14.8956 42.9998 14.0002 42.1044 14.0002 40.9998V22.1998C14.0002 21.92 14.0589 21.6433 14.1726 21.3876L24.2998 6.00031ZM5 23C5 21.8955 5.89543 21 7 21H9.5C10.6046 21 11.5 21.8955 11.5 23V41C11.5 42.1046 10.6046 43 9.5 43H7C5.89543 43 5 42.1046 5 41V23Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default ThunbsUpIcon;
