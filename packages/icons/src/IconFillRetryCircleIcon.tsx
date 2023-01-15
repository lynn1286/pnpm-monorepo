import * as React from "react";
import { IconProps } from "./types";

export const IconFillRetryCircleIcon = React.forwardRef<
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
        d="M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24ZM15.75 24C15.75 19.4437 19.4437 15.75 24 15.75C26.3204 15.75 28.4171 16.708 29.9161 18.25H26V21.75H33.5C34.4665 21.75 35.25 20.9665 35.25 20V12.5H31.75V15.168C29.6814 13.3514 26.9693 12.25 24 12.25C17.5107 12.25 12.25 17.5107 12.25 24C12.25 30.4893 17.5107 35.75 24 35.75C28.2975 35.75 32.0561 33.4429 34.1049 29.9998L31.0949 28.2126C29.6564 30.6301 27.0174 32.25 24 32.25C19.4437 32.25 15.75 28.5563 15.75 24Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
});

export default IconFillRetryCircleIcon;
