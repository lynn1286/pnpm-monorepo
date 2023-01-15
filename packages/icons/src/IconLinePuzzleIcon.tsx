import * as React from "react";
import { IconProps } from "./types";

export const IconLinePuzzleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M22.5 8C20.567 8 19 9.567 19 11.5C19 11.6085 19.0049 11.7154 19.0143 11.8205C19.0648 12.3799 18.8776 12.9347 18.4987 13.3493C18.1198 13.7638 17.5841 14 17.0224 14H10.5V38.5H15.15C15.8449 35.0766 18.8716 32.5 22.5 32.5C26.1284 32.5 29.1551 35.0766 29.85 38.5H34V31.4776C34 30.9159 34.2362 30.3802 34.6507 30.0013C35.0653 29.6224 35.6201 29.4352 36.1795 29.4857C36.2846 29.4951 36.3914 29.5 36.5 29.5C38.433 29.5 40 27.933 40 26C40 24.067 38.433 22.5 36.5 22.5C36.3915 22.5 36.2846 22.5049 36.1795 22.5144C35.6201 22.5648 35.0653 22.3776 34.6507 21.9987C34.2362 21.6198 34 21.0841 34 20.5224V14H27.9776C27.4159 14 26.8802 13.7638 26.5013 13.3493C26.1224 12.9347 25.9352 12.3799 25.9857 11.8205C25.9951 11.7154 26 11.6086 26 11.5C26 9.567 24.433 8 22.5 8ZM15.15 10C15.8449 6.57664 18.8716 4 22.5 4C26.1284 4 29.1551 6.57664 29.85 10H36C37.1046 10 38 10.8954 38 12V18.65C41.4234 19.3449 44 22.3716 44 26C44 29.6284 41.4234 32.6551 38 33.35V40.5C38 41.6046 37.1046 42.5 36 42.5H27.9776C27.4159 42.5 26.8802 42.2638 26.5013 41.8493C26.1224 41.4347 25.9352 40.8799 25.9857 40.3205C25.9951 40.2154 26 40.1086 26 40C26 38.067 24.433 36.5 22.5 36.5C20.567 36.5 19 38.067 19 40C19 40.1085 19.0049 40.2154 19.0143 40.3205C19.0648 40.8799 18.8776 41.4347 18.4987 41.8493C18.1198 42.2638 17.5841 42.5 17.0224 42.5H8.5C7.39543 42.5 6.5 41.6046 6.5 40.5V12C6.5 10.8954 7.39543 10 8.5 10H15.15Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default IconLinePuzzleIcon;