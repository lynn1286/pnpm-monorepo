import * as React from 'react'
import type { IconProps } from './types'

export const IconRead = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M27 6H9L8.82373 6.00509C7.24892 6.09634 6 7.40232 6 9V39L6.00509 39.1763C6.09634 40.7511 7.40232 42 9 42H39L39.1763 41.9949C40.7511 41.9037 42 40.5977 42 39V26H38V38H10V10H27V6Z"
          fill={color}
        />
        <path
          d="M41.5298 11.7883L25.5298 30.7883C25.169 31.2167 24.6451 31.4742 24.0855 31.4982C23.5259 31.5221 22.9819 31.3103 22.5858 30.9142L13.0858 21.4142L15.9142 18.5858L23.8736 26.5452L38.4702 9.21173L41.5298 11.7883Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconRead.displayName = 'IconRead'

export default IconRead
