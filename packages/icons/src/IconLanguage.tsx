import * as React from "react";
import { IconProps } from "./types";

export const IconLanguage = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18.9403 5.01492L19.936 8.99992L30 8.99999V13L26.5899 13.0001C25.6332 16.4354 23.6439 19.8197 20.6523 23.1544C23.3912 25.4442 26.3117 27.2576 29.4155 28.6012L31.6538 23.2308H35.3462L42.8462 41.2308L39.1538 42.7692L37.166 37.9999H29.833L27.8462 42.7692L24.1538 41.2308L27.8774 32.294C24.2862 30.7457 20.9232 28.6393 17.7926 25.9801C14.9743 28.4373 11.7811 30.3399 8.22267 31.6816L7.67267 31.8835L6.32733 28.1165C9.51692 26.9774 12.3664 25.3423 14.8855 23.2049C12.261 20.3006 10.4328 16.8911 9.41019 13.0005L6 13V8.99999L15.813 8.99992L15.0597 5.98507L18.9403 5.01492ZM33.5 29.201L31.5 33.9999H35.499L33.5 29.201ZM13.5716 13.0005L22.3942 13.0004C21.4935 15.5114 19.876 18.0631 17.5201 20.6546L17.7438 20.4029C15.8377 18.2584 14.4493 15.7963 13.5716 13.0005Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default IconLanguage;
