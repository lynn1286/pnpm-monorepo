import * as React from 'react'
import type { IconProps } from './types'

export const IconCheckbox = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M39 6C40.5977 6 41.9037 7.24892 41.9949 8.82373L42 9V39C42 40.5977 40.7511 41.9037 39.1763 41.9949L39 42H9C7.40232 42 6.09634 40.7511 6.00509 39.1763L6 39V9C6 7.40232 7.24892 6.09634 8.82373 6.00509L9 6H39ZM38 10H10V38H38V10ZM35.4142 18.4142L32.5858 15.5858L21 27.171L14.9142 21.0858L12.0858 23.9142L21 32.8284L35.4142 18.4142Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

export default IconCheckbox
