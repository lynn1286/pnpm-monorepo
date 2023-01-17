import * as React from 'react'
import type { IconProps } from './types'

export const IconComputer = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5 10C5 7.79086 6.79086 6 9 6H39C41.2091 6 43 7.79086 43 10V32C43 34.2091 41.2091 36 39 36H9C6.79086 36 5 34.2091 5 32V10ZM39 10H9V32H39V10Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path d="M14 39H34V43H14V39ZM22 35H26V39H22V35Z" fill={color} />
      </svg>
    )
  }
)

IconComputer.displayName = IconComputerProps
export default IconComputer
