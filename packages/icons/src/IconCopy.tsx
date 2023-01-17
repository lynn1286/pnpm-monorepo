import * as React from 'react'
import type { IconProps } from './types'

export const IconCopy = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M40.9951 8.80036C40.8911 6.68397 39.1422 5 37 5H20V9H37V30H41V9L40.9951 8.80036ZM30 13C31.5977 13 32.9037 14.2489 32.9949 15.8237L33 16V40C33 41.5977 31.7511 42.9037 30.1763 42.9949L30 43H10C8.40232 43 7.09634 41.7511 7.00509 40.1763L7 40V16C7 14.4023 8.24892 13.0963 9.82373 13.0051L10 13H30ZM29 39V17H11V39H29Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconCopy.displayName = 'IconCopy'

export default IconCopy
