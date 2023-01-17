import * as React from 'react'
import type { IconProps } from './types'

export const IconExpandWindow = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18 11.5858L20.8284 14.4142L11.2432 24L20.8284 33.5858L18 36.4142L5.58578 24L18 11.5858ZM31.4142 11.5858L28.5858 14.4142L38.171 24L28.5858 33.5858L31.4142 36.4142L43.8284 24L31.4142 11.5858Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconExpandWindow.displayName = IconExpandWindowProps
export default IconExpandWindow
