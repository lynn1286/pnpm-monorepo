import * as React from "react";
import { IconProps } from "./types";

export const IconBicolorUploadTextIcon = React.forwardRef<
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
        d="M8 16C8 12.4654 10.8654 9.59998 14.4 9.59998H28.8C32.3346 9.59998 35.2 12.4654 35.2 16V20.8H31.2022C30.1486 18.273 28.1264 16.2509 25.5996 15.197V38.3998L25.6004 34.6374C25.6004 37.0098 27.1991 38.2639 30.3966 38.3998L30.4008 41.5998H12.8008V38.3998C15.9508 38.266 17.5504 37.0488 17.5996 34.748V15.1967C15.0724 16.2505 13.05 18.2728 11.9962 20.8H8V16Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        d="M36.7496 18.4V12.8L36.8749 12.8015C40.3795 12.8433 43.1986 15.6962 43.1986 19.2011V24H39.9504C39.9504 21.6472 38.8835 19.7806 36.7496 18.4ZM27.2123 34.1915V16.2864C28.2666 16.6364 29.1192 17.3411 29.7701 18.4002C30.0639 18.8783 30.3973 19.9115 30.3973 20.6022V22.3829H33.5818V33.8012C33.5818 35.2652 33.5922 36.4256 34.8741 37.4394C35.5415 37.9672 36.7029 38.2874 38.3584 38.4002V41.6002H31.9895V36.8946C30.9918 36.8454 30.252 36.7969 29.7701 36.749C29.0473 36.6772 28.5754 36.5018 28.1856 36.3456C27.4511 36.0511 27.1266 35.333 27.2123 34.1915Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        fillOpacity=".3"
      />
    </svg>
  );
});

export default IconBicolorUploadTextIcon;
