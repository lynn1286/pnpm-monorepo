import * as React from 'react'
import type { IconProps } from './types'

export const IconMoreBicolor = React.forwardRef<SVGSVGElement, IconProps>(
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
          opacity=".2"
          d="M24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M17.25 24C17.25 25.6569 15.9069 27 14.25 27 12.5931 27 11.25 25.6569 11.25 24 11.25 22.3431 12.5931 21 14.25 21 15.9069 21 17.25 22.3431 17.25 24ZM27 24C27 25.6569 25.6569 27 24 27 22.3431 27 21 25.6569 21 24 21 22.3431 22.3431 21 24 21 25.6569 21 27 22.3431 27 24ZM36.75 24C36.75 25.6569 35.4069 27 33.75 27 32.0931 27 30.75 25.6569 30.75 24 30.75 22.3431 32.0931 21 33.75 21 35.4069 21 36.75 22.3431 36.75 24Z"
          fill={color}
        />
      </svg>
    )
  }
)

IconMoreBicolor.displayName = 'IconMoreBicolor'

export default IconMoreBicolor
