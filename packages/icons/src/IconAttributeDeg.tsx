import * as React from 'react'
import type { IconProps } from './types'

export const IconAttributeDeg = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.2224 37.5834L23.7224 5.58337L27.2776 7.41653L12.2815 36.5H42V40.5H9C8.30242 40.5 7.65525 40.1365 7.2922 39.5408C6.92916 38.9452 6.9027 38.2034 7.2224 37.5834Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M26.2432 38.1098C26.2432 31.5869 22.2133 26.0005 16.5 23.7135L17.9865 20C25.1661 22.8738 30.2432 29.8965 30.2432 38.1098H26.2432Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconAttributeDeg.displayName = IconAttributeDegProps
export default IconAttributeDeg
