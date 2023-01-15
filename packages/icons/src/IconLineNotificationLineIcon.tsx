import * as React from "react";
import { IconProps } from "./types";

export const IconLineNotificationLineIcon = React.forwardRef<
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
        d="M26 5L26.0006 8.14186C32.6844 9.09819 37.8451 14.7754 37.9966 21.6874L38 22V32H41V36H7V32H10V22C10 14.947 15.2155 9.11215 22.0002 8.14175L22 5H26ZM24 12C18.5708 12 14.1521 16.3267 14.0038 21.7201L14 22V32H34V22C34 16.4772 29.5228 12 24 12ZM17 39H31V43H17V39Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
});

export default IconLineNotificationLineIcon;
