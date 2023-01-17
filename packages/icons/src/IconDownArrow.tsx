import * as React from 'react'
import type { IconProps } from './types'

export const IconDownArrow = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M26 6L25.9998 34.17L34.5858 25.5858L37.4142 28.4142L24 41.8284L10.5858 28.4142L13.4142 25.5858L21.9998 34.17L22 6H26Z"
          fill={color}
        />
      </svg>
    )
  }
)

IconDownArrow.displayName = 'IconDownArrow'

export default IconDownArrow
