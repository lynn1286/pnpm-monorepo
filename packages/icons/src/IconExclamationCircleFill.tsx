import * as React from 'react'
import type { IconProps } from './types'

export const IconExclamationCircleFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4ZM26.1053 30.3158H21.8947V34.5263H26.1053V30.3158ZM26.1053 13.4737H21.8947V28.2105H26.1053V13.4737Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconExclamationCircleFill.displayName = 'IconExclamationCircleFill'

export default IconExclamationCircleFill
