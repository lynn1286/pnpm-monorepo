import * as React from 'react'
import type { IconProps } from './types'

export const IconCheckCircleLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M24 5C34.4934 5 43 13.5066 43 24C43 34.4934 34.4934 43 24 43C13.5066 43 5 34.4934 5 24C5 13.5066 13.5066 5 24 5ZM24 9C15.7157 9 9 15.7157 9 24C9 32.2843 15.7157 39 24 39C32.2843 39 39 32.2843 39 24C39 15.7157 32.2843 9 24 9ZM34.4142 19.4142L31.5858 16.5858L22 26.171L16.4142 20.5858L13.5858 23.4142L22 31.8284L34.4142 19.4142Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconCheckCircleLine.displayName = 'IconCheckCircleLine'

export default IconCheckCircleLine
