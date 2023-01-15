import * as React from "react";
import { IconProps } from "./types";

export const IconLineFlipVerticallyIcon = React.forwardRef<
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
        d="M40 22 40 26 36 26 36 22 40 22ZM32 22 32 26 28 26 28 22 32 22ZM20 22 20 26 16 26 16 22 20 22ZM12 22 12 26 8 26 8 22 12 22ZM36.0607 43C36.8556 43 37.2898 42.0927 36.7809 41.4951L24.7202 27.3301C24.3454 26.89 23.6546 26.89 23.2798 27.3301L11.2191 41.4951C10.7102 42.0927 11.1444 43 11.9393 43L36.0607 43Z"
        fill={color}
      />
      <path
        d="M11.9393 5C11.1444 5 10.7102 5.90732 11.2191 6.50493L23.2798 20.6699C23.6546 21.11 24.3454 21.11 24.7202 20.6699L36.7809 6.50493C37.2898 5.90732 36.8556 5 36.0607 5L11.9393 5ZM30.056 8.67016L17.944 8.67016L24 15.7827L30.056 8.67016Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
});

export default IconLineFlipVerticallyIcon;
