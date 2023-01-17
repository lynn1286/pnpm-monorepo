import * as React from 'react'
import type { IconProps } from './types'

export const IconSwapBold = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
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
          d="M31.1652 6L39.2541 14.5382C39.958 15.2812 40.3503 16.2657 40.3503 17.2892C40.3503 19.411 38.6939 21.1602 36.5554 21.2837L36.3503 21.2892H8.17513V15.2892L31.701 15.2887L26.8095 10.1265L31.1652 6ZM12 27.2892H40.1751V33.2892L16.649 33.2887L21.5408 38.4519L17.185 42.5784L9.09619 34.0402C8.39231 33.2972 8 32.3126 8 31.2892C8 29.1674 9.65641 27.4182 11.7948 27.2947L12 27.2892Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

export default IconSwapBold
