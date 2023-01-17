import * as React from 'react'
import type { IconProps } from './types'

export const IconCheckCircleFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4ZM31.5858 16.5858L22 26.171L16.4142 20.5858L13.5858 23.4142L22 31.8284L34.4142 19.4142L31.5858 16.5858Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconCheckCircleFill.displayName = 'IconCheckCircleFill'

export default IconCheckCircleFill
