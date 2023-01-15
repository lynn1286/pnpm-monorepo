import * as React from "react";
import { IconProps } from "./types";

export const IconBicolorLoadingMIcon = React.forwardRef<
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
        opacity=".08"
        d="M24 5C34.4934 5 43 13.5066 43 24C43 34.4934 34.4934 43 24 43C13.5066 43 5 34.4934 5 24C5 13.5066 13.5066 5 24 5ZM24 10C16.268 10 10 16.268 10 24C10 31.732 16.268 38 24 38C31.732 38 38 31.732 38 24C38 16.268 31.732 10 24 10ZM31.8264 25.6758L29.645 19.0956C28.7027 16.4566 25.2367 16.2718 24.0347 18.759L24 18.8332L23.9653 18.759C22.7511 16.2466 19.227 16.4606 18.3272 19.1763L16.1736 25.6758L16.1058 25.9072C15.6905 27.5354 16.5301 29.2507 18.0611 29.8167L18.1092 29.834C19.3785 30.279 20.7338 29.8011 21.512 28.7377L21.5368 28.7033L21.5785 28.7617C22.7994 30.4284 25.2626 30.4114 26.4632 28.7033L26.488 28.7377C27.276 29.8146 28.6559 30.291 29.9389 29.8167C31.5427 29.2238 32.3878 27.3698 31.8264 25.6758Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        opacity=".2"
        d="M7.5 21.5C8.88071 21.5 10 22.6193 10 24C10 31.732 16.268 38 24 38C25.3807 38 26.5 39.1193 26.5 40.5C26.5 41.8807 25.3807 43 24 43C13.5066 43 5 34.4934 5 24C5 22.6193 6.11929 21.5 7.5 21.5Z"
        fill={color}
      />
    </svg>
  );
});

export default IconBicolorLoadingMIcon;
