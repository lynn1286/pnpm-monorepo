import * as React from 'react'
import type { IconProps } from './types'

export const IconLeft = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M32.8327 10.4184L30.0042 7.59L13.59 24.0042L30.0042 40.4184L32.8327 37.59L19.2475 24.0042L32.8327 10.4184Z"
          fill={color}
        />
      </svg>
    )
  }
)

IconLeft.displayName = 'IconLeft'

export default IconLeft
