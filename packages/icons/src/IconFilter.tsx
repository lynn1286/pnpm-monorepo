import * as React from 'react'
import type { IconProps } from './types'

export const IconFilter = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M39 10C40.1046 10 41 10.8954 41 12V13.85C41 16.3131 40.0118 17.6732 38.2569 19.4014L27 29.502V38L21 41V29.503L9.74314 19.4014C7.98819 17.6732 7 16.3131 7 13.85V12C7 10.8954 7.89543 10 9 10H39Z"
          fill={color}
        />
      </svg>
    )
  }
)

export default IconFilter
