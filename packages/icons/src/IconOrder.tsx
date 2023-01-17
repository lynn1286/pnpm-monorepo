import * as React from 'react'
import type { IconProps } from './types'

export const IconOrder = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M40 12.1716L32.8284 5H11L10.8237 5.00509C9.24892 5.09634 8 6.40232 8 8V40L8.00509 40.1763C8.09634 41.7511 9.40232 43 11 43H37L37.1763 42.9949C38.7511 42.9037 40 41.5977 40 40V12.1716ZM12 9H31.171L36 13.829V39H12V9ZM26 27V31H16V27H26ZM32 23V19H16V23H32Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconOrder.displayName = 'IconOrder'

export default IconOrder
