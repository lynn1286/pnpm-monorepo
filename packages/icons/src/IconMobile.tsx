import * as React from 'react'
import type { IconProps } from './types'

export const IconMobile = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10 9C10 6.79086 11.7909 5 14 5H34C36.2091 5 38 6.79086 38 9V39C38 41.2091 36.2091 43 34 43H14C11.7909 43 10 41.2091 10 39V9ZM34 9H14V39H34V9Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path d="M22 32H26V36H22V32Z" fill={color} />
      </svg>
    )
  }
)

export default IconMobile
