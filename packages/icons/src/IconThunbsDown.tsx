import * as React from 'react'
import type { IconProps } from './types'

export const IconThunbsDown = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M24.2998 42.0746C25 43.075 25.7998 44.075 27 44.075C30 44.075 30.5 40.075 30 38.075C29.5 36.075 28.4158 31.3861 28 30.0749H37.7233C39.3618 30.0898 40.9247 29.3114 42 28.0749C43.078 26.8351 43.5573 25.1843 43.3108 23.5599L43.3073 23.5374L40.5854 9.74782C40.1621 6.99734 37.7826 4.97495 35 5.00019L16.0002 5.07511C14.8956 5.07511 14.0002 5.97054 14.0002 7.07511V25.8751C14.0002 26.1549 14.0589 26.4317 14.1726 26.6874L24.2998 42.0746ZM5 25.0749C5 26.1795 5.89543 27.0749 7 27.0749H9.5C10.6046 27.0749 11.5 26.1795 11.5 25.0749V7.07491C11.5 5.97034 10.6046 5.07491 9.5 5.07491H7C5.89543 5.07491 5 5.97034 5 7.07491V25.0749Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconThunbsDown.displayName = 'IconThunbsDown'

export default IconThunbsDown
