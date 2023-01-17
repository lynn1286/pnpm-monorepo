import * as React from 'react'
import type { IconProps } from './types'

export const IconDownCaret = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.0635 16H36.9364C37.4887 16 37.9364 16.4477 37.9364 17C37.9364 17.2249 37.8607 17.4432 37.7213 17.6196L24.7849 34.0058C24.4427 34.4393 23.8138 34.5133 23.3804 34.1711C23.319 34.1226 23.2635 34.0672 23.2151 34.0058L10.2787 17.6196C9.93645 17.1862 10.0104 16.5573 10.4439 16.2151C10.6204 16.0758 10.8387 16 11.0635 16Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

export default IconDownCaret
