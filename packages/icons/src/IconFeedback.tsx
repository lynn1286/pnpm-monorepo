import * as React from 'react'
import type { IconProps } from './types'

export const IconFeedback = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18.5455 33C19.6724 33 20.7471 33.4754 21.5052 34.3093L24 37.0536L26.4948 34.3093C27.2529 33.4754 28.3276 33 29.4545 33H39V12H9V33H18.5455ZM5 10C5 8.89543 5.89543 8 7 8H41C42.1046 8 43 8.89543 43 10V35C43 36.1046 42.1046 37 41 37H29.4545L24.7399 42.1861C24.3432 42.6225 23.6568 42.6225 23.2601 42.1861L18.5455 37H7C5.89543 37 5 36.1046 5 35V10Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path d="M15 16H33V20H15V16ZM15 24H23V28H15V24Z" fill={color} />
      </svg>
    )
  }
)

export default IconFeedback
