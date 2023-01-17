import * as React from 'react'
import type { IconProps } from './types'

export const IconDragHorizontally = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M41 15V21H35V15H41ZM27 15V21H21V15L27 15ZM13 15V21H7V15H13ZM41 27V33H35V27H41ZM27 27V33H21V27H27ZM13 27V33H7V27H13Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

export default IconDragHorizontally
