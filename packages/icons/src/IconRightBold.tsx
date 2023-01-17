import * as React from 'react'
import type { IconProps } from './types'

export const IconRightBold = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18.8269 6.17157L13.17 11.8284L25.3414 24L13.17 36.1716L18.8269 41.8284L36.6553 24L18.8269 6.17157Z"
          fill={color}
        />
      </svg>
    )
  }
)

export default IconRightBold
