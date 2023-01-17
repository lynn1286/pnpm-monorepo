import * as React from 'react'
import type { IconProps } from './types'

export const IconNav = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M43 8V40H5V8H43ZM14 31H9V36H14V31ZM18 31H39V36H18V31ZM14 21H9V27H14V21ZM18 21H39V27H18V21ZM14 12H9V17H14V12ZM18 12H39V17H18V12Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconNav.displayName = 'IconNav'

export default IconNav
