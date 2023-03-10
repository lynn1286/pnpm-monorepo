import * as React from 'react'
import type { IconProps } from './types'

export const IconErrorCircleLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M24 5C34.4934 5 43 13.5066 43 24C43 34.4934 34.4934 43 24 43C13.5066 43 5 34.4934 5 24C5 13.5066 13.5066 5 24 5ZM24 9C15.7157 9 9 15.7157 9 24C9 32.2843 15.7157 39 24 39C32.2843 39 39 32.2843 39 24C39 15.7157 32.2843 9 24 9ZM31.0711 19.7574L28.2426 16.9289L24 21.1716L19.7574 16.9289L16.9289 19.7574L21.1716 24L16.9289 28.2426L19.7574 31.0711L24 26.8284L28.2426 31.0711L31.0711 28.2426L26.8284 24L31.0711 19.7574Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconErrorCircleLine.displayName = 'IconErrorCircleLine'

export default IconErrorCircleLine
