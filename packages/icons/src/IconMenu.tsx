import * as React from 'react'
import type { IconProps } from './types'

export const IconMenu = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9 11H39V15H9V11ZM9 22H39V26H9V22ZM9 33H39V37H9V33Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconMenu.displayName = IconMenuProps
export default IconMenu
