import * as React from 'react'
import type { IconProps } from './types'

export const IconPlus = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M26 6V22H42V26H26V42H22V26H6V22H22V6H26Z" fill={color} />
      </svg>
    )
  }
)

IconPlus.displayName = IconPlusProps
export default IconPlus
