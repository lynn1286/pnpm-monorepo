import * as React from 'react'
import type { IconProps } from './types'

export const IconAlignTop = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M25.9999 42.0004 25.9999 17.0002 21.9999 17.0002 21.9999 42.0004 25.9999 42.0004ZM42 8 5.99998 8 5.99998 12 42 12 42 8Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M18.4641 23.0002L29.5362 23.0002C29.9216 23.0002 30.1383 22.5497 29.9018 22.2404L24.585 15.291C24.2884 14.9033 23.712 14.9033 23.4153 15.291L18.0986 22.2404C17.862 22.5497 18.0788 23.0002 18.4641 23.0002Z"
          fill={color}
        />
      </svg>
    )
  }
)

IconAlignTop.displayName = 'IconAlignTop'

export default IconAlignTop
