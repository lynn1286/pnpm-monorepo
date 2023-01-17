import * as React from 'react'
import type { IconProps } from './types'

export const IconBilling = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M40 9C41.5977 9 42.9037 10.2489 42.9949 11.8237L43 12V36C43 37.5977 41.7511 38.9037 40.1763 38.9949L40 39H8C6.40232 39 5.09634 37.7511 5.00509 36.1763L5 36V12C5 10.4023 6.24892 9.09634 7.82373 9.00509L8 9H40ZM39 23H9V35H39V23ZM9 13H39V16H9V13Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconBilling.displayName = 'IconBilling'

export default IconBilling
