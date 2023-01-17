import * as React from 'react'
import type { IconProps } from './types'

export const IconHome = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M24 5.67403L42 16.3615V42H6V16.3615L24 5.67403ZM24 10.326L10 18.638V38L18 37.999V26H30V37.999L38 38V18.638L24 10.326ZM22 37.999V30H26V37.999H22Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconHome.displayName = IconHomeProps
export default IconHome
