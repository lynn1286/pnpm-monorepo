import * as React from 'react'
import type { IconProps } from './types'

export const IconMaker = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19 7C19 5.89543 18.1046 5 17 5H7C5.89543 5 5 5.89543 5 7V17C5 18.1046 5.89543 19 7 19H10V29H7C5.89543 29 5 29.8954 5 31V41C5 42.1046 5.89543 43 7 43H17C18.1046 43 19 42.1046 19 41V38H29V41C29 42.1046 29.8954 43 31 43H41C42.1046 43 43 42.1046 43 41V31C43 29.8954 42.1046 29 41 29H38V19H41C42.1046 19 43 18.1046 43 17V7C43 5.89543 42.1046 5 41 5H31C29.8954 5 29 5.89543 29 7V10H19V7ZM9 33H15V39H9V33ZM39 33H33V39H39V33ZM29 14V17C29 18.1046 29.8954 19 31 19H34V29H31C29.8954 29 29 29.8954 29 31V34H19V31C19 29.8954 18.1046 29 17 29H14V19H17C18.1046 19 19 18.1046 19 17V14H29ZM15 9H9V15H15V9ZM33 9H39V15H33V9Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

export default IconMaker
