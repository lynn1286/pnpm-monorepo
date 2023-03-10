import * as React from 'react'
import type { IconProps } from './types'

export const IconDelete = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M33 6V10H42V14H39V39C39 40.5977 37.7511 41.9037 36.1763 41.9949L36 42H12C10.4023 42 9.09634 40.7511 9.00509 39.1763L9 39V14H6V10H15V6H33ZM35 14H13V38H35V14ZM22 18V32H18V18H22ZM30 18V32H26V18H30Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconDelete.displayName = 'IconDelete'

export default IconDelete
