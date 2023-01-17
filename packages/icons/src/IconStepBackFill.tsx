import * as React from 'react'
import type { IconProps } from './types'

export const IconStepBackFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21.2688 7.15109C22.0177 7.4599 22.5064 8.18998 22.5064 9.00006V16.0621C27.8952 16.5214 32.5828 18.7012 36.4882 22.5813C40.8363 26.9011 43.3316 32.2902 43.9894 38.6497C44.0799 39.5245 43.5882 40.3558 42.778 40.6979C41.9678 41.04 41.0292 40.8128 40.4653 40.1379C36.1132 34.9296 32.5761 32.4067 29.8606 31.8418C27.2831 31.3057 24.8344 31.1412 22.5064 31.3327V39.0001C22.5064 39.8199 22.0061 40.5567 21.244 40.8591C20.482 41.1614 19.6126 40.9681 19.0505 40.3713L4.54413 24.9701C3.80444 24.1848 3.82089 22.9544 4.5813 22.1891L19.0877 7.59034C19.6587 7.01571 20.5199 6.84227 21.2688 7.15109Z"
          fill={color}
        />
      </svg>
    )
  }
)

export default IconStepBackFill
