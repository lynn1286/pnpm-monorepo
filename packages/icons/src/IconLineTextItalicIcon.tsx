import * as React from "react";
import { IconProps } from "./types";

export const IconLineTextItalicIcon = React.forwardRef<
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
        d="M35 7V11H28.639L23.439 37H30V41H13V37H19.359L24.559 11H18V7H35Z"
        fill={color}
      />
    </svg>
  );
});

export default IconLineTextItalicIcon;
