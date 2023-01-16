import * as React from "react";
import { IconProps } from "./types";

export const RightCaretIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M34.0058 23.2151L17.6196 10.2787C17.1862 9.93645 16.5573 10.0104 16.2151 10.4439C16.0758 10.6204 16 10.8387 16 11.0635V36.9364C16 37.4887 16.4477 37.9364 17 37.9364C17.2249 37.9364 17.4432 37.8607 17.6196 37.7213L34.0058 24.7849C34.4393 24.4427 34.5133 23.8138 34.1711 23.3804C34.1226 23.319 34.0672 23.2635 34.0058 23.2151Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default RightCaretIcon;
