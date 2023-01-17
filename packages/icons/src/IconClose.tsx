import * as React from 'react'
import type { IconProps } from './types'

export const IconClose = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M36.0858 9.08578L38.9142 11.9142L26.8278 23.9998L38.9142 36.0858L36.0858 38.9142L23.9998 26.8278L11.9142 38.9142L9.08582 36.0858L21.1718 23.9998L9.08582 11.9142L11.9142 9.08578L23.9998 21.1718L36.0858 9.08578Z"
          fill={color}
        />
      </svg>
    )
  }
)

IconClose.displayName = IconCloseProps
export default IconClose
