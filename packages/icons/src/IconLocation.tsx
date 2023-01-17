import * as React from 'react'
import type { IconProps } from './types'

export const IconLocation = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M40 19C40 10.6813 32.8048 4 24 4C15.1952 4 8 10.6813 8 19C8 26.3438 12.7819 34.3202 22.1758 43.0385L24 44.7119L25.8242 43.0385C35.2181 34.3202 40 26.3438 40 19ZM12 19C12 12.9593 17.3408 8 24 8C30.6592 8 36 12.9593 36 19L35.9962 19.3115L35.9849 19.6248C35.7173 25.1778 31.9017 31.6206 24.4087 38.8699L24 39.262L23.5913 38.8699L23.1711 38.4604C15.678 31.1054 12 24.5892 12 19ZM24 12C27.866 12 31 15.134 31 19C31 22.866 27.866 26 24 26C20.134 26 17 22.866 17 19C17 15.134 20.134 12 24 12ZM21 19C21 17.3431 22.3431 16 24 16C25.6569 16 27 17.3431 27 19C27 20.6569 25.6569 22 24 22C22.3431 22 21 20.6569 21 19Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconLocation.displayName = IconLocationProps
export default IconLocation
