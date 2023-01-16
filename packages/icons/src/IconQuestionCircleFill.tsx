import * as React from "react";
import { IconProps } from "./types";

export const IconQuestionCircleFill = React.forwardRef<
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
        d="M24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4ZM26.1053 31.3684H21.8947V35.5789H26.1053V31.3684ZM24 12.4211C19.4258 12.4211 16.7448 15.0068 16.6351 19.5001L16.6316 19.7895H20.8421L20.8447 19.5672C20.8961 17.3919 21.7296 16.6316 24 16.6316C26.4801 16.6316 27.532 18.5442 26.8538 19.9006C26.7912 20.0258 26.6954 20.1664 26.5572 20.3321L26.4455 20.4612L26.2217 20.6995L26.091 20.8307L25.9473 20.9706L25.6184 21.2785L24.8297 21.9941L24.3346 22.4588C22.6936 24.037 21.9653 25.1828 21.8996 26.8965L21.8947 27.1579V29.2632H26.1053V27.1579L26.1083 27.0916C26.1276 26.876 26.2429 26.63 26.5039 26.3003L26.6248 26.1538L26.8343 25.9204L27.0861 25.6606L27.3829 25.3714L27.7274 25.0499L28.723 24.1416C29.6416 23.2781 30.2043 22.6148 30.6198 21.7836C32.6484 17.7265 29.7304 12.4211 24 12.4211Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
});

export default IconQuestionCircleFill;
