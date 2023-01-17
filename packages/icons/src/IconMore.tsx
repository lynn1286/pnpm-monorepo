import * as React from 'react'
import type { IconProps } from './types'

export const IconMore = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M41 21V27H35V21H41ZM27 21V27H21V21H27ZM13 21V27H7V21L13 21Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconMore.displayName = 'IconMore'

export default IconMore
