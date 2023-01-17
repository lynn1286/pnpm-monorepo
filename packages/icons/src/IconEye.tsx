import * as React from 'react'
import type { IconProps } from './types'

export const IconEye = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M42.9148 22.4878C37.3247 13.5921 31.024 9 24 9C16.8549 9 10.4582 13.7518 4.79668 22.9518L4.15164 24L4.79668 25.0482L5.08519 25.5122C10.6753 34.4079 16.976 39 24 39C31.1451 39 37.5418 34.2482 43.2033 25.0482L43.8484 24L43.2033 22.9518L42.9148 22.4878ZM9.28509 23.362C13.9662 16.373 18.8747 13 24 13L24.2956 13.0037L24.5964 13.0153C29.6065 13.2727 34.4077 16.7837 38.99 23.7773L39.134 24L38.99 24.2227L38.7149 24.638C34.0338 31.627 29.1253 35 24 35L23.7044 34.9963L23.4036 34.9847C18.3935 34.7273 13.5923 31.2163 9.01 24.2227L8.865 24L9.01 23.7773L9.28509 23.362ZM24 17C27.866 17 31 20.134 31 24C31 27.866 27.866 31 24 31C20.134 31 17 27.866 17 24C17 20.134 20.134 17 24 17ZM21 24C21 22.3431 22.3431 21 24 21C25.6569 21 27 22.3431 27 24C27 25.6569 25.6569 27 24 27C22.3431 27 21 25.6569 21 24Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconEye.displayName = IconEyeProps
export default IconEye
