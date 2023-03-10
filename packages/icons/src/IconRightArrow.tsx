import * as React from 'react'
import type { IconProps } from './types'

export const IconRightArrow = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M28.4142 10.5858L25.5858 13.4142L34.1714 21.9998L6 22V26L34.1714 25.9998L25.5858 34.5858L28.4142 37.4142L41.8284 24L28.4142 10.5858Z"
          fill={color}
        />
      </svg>
    )
  }
)

IconRightArrow.displayName = 'IconRightArrow'

export default IconRightArrow
