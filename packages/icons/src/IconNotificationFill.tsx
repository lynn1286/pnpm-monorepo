import * as React from 'react'
import type { IconProps } from './types'

export const IconNotificationFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M26.0006 8.14186 26 5H22L22.0002 8.14175C15.2155 9.11215 10 14.947 10 22V32H7V36H41V32H38V22L37.9966 21.6874C37.8451 14.7754 32.6844 9.09819 26.0006 8.14186ZM31 39H17V43H31V39Z"
          fill={color}
        />
      </svg>
    )
  }
)

IconNotificationFill.displayName = 'IconNotificationFill'

export default IconNotificationFill
