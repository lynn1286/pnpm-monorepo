import * as React from 'react'
import type { IconProps } from './types'

export const IconExclamationCircleLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M43 24C43 13.5066 34.4934 5 24 5C13.5066 5 5 13.5066 5 24C5 34.4934 13.5066 43 24 43C34.4934 43 43 34.4934 43 24ZM9 24C9 15.7157 15.7157 9 24 9C32.2843 9 39 15.7157 39 24C39 32.2843 32.2843 39 24 39C15.7157 39 9 32.2843 9 24ZM22 30V34H26V30H22ZM22 28V14H26V28H22Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconExclamationCircleLine.displayName = 'IconExclamationCircleLine'

export default IconExclamationCircleLine
