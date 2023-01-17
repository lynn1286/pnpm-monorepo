import * as React from 'react'
import type { IconProps } from './types'

export const IconDown = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M37.5858 15.5858L40.4142 18.4142L24 34.8284L7.58582 18.4142L10.4142 15.5858L24 29.171L37.5858 15.5858Z"
          fill={color}
        />
      </svg>
    )
  }
)

export default IconDown
