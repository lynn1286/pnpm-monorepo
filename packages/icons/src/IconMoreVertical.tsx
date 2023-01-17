import * as React from 'react'
import type { IconProps } from './types'

export const IconMoreVertical = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21 7H27V13H21V7ZM21 21H27V27H21V21ZM21 35H27V41H21V35Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconMoreVertical.displayName = 'IconMoreVertical'

export default IconMoreVertical
