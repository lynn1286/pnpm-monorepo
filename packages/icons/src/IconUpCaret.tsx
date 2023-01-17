import * as React from 'react'
import type { IconProps } from './types'

export const IconUpCaret = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.0635 31.9962H36.9364C37.4887 31.9962 37.9364 31.5485 37.9364 30.9962C37.9364 30.7713 37.8607 30.553 37.7213 30.3766L24.7849 13.9904C24.4427 13.5569 23.8138 13.4829 23.3804 13.8251C23.319 13.8736 23.2635 13.929 23.2151 13.9904L10.2787 30.3766C9.93645 30.81 10.0104 31.4389 10.4439 31.7811C10.6204 31.9204 10.8387 31.9962 11.0635 31.9962Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

export default IconUpCaret
