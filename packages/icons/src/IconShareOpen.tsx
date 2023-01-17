import * as React from 'react'
import type { IconProps } from './types'

export const IconShareOpen = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M22 10V6H9L8.82373 6.00509C7.24892 6.09634 6 7.40232 6 9V39L6.00509 39.1763C6.09634 40.7511 7.40232 42 9 42H39L39.1763 41.9949C40.7511 41.9037 42 40.5977 42 39V26H38V38H10V10H22ZM42 20V6H28V10H35.17L18.5858 26.5858L21.4142 29.4142L38 12.828V20H42Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

export default IconShareOpen
