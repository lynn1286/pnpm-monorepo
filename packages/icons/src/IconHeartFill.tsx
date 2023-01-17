import * as React from 'react'
import type { IconProps } from './types'

export const IconHeartFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M31 9C37.0751 9 42 13.9249 42 20C42 22.9894 40.8076 25.7002 38.8724 27.6828L38.6035 27.9538L25.3735 40.4538C24.6449 41.1422 23.5282 41.1798 22.7571 40.5671L22.6248 40.4522L9.88066 28.3862C9.44353 28.0146 9.03351 27.6073 8.65497 27.1669C6.95319 25.1868 6 22.6644 6 20C6 13.9249 10.9249 9 17 9C19.43 9 21.7319 9.79425 23.6047 11.2021L23.8824 11.4179L23.999 11.514L24.3371 11.2467C26.0339 9.95272 28.0899 9.16615 30.2772 9.02351L30.6645 9.00506L31 9Z"
          fill={color}
        />
      </svg>
    )
  }
)

IconHeartFill.displayName = 'IconHeartFill'

export default IconHeartFill
