import * as React from 'react'
import type { IconProps } from './types'

export const IconStepNextFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M26.7312 7.15109C25.9823 7.4599 25.4936 8.18998 25.4936 9.00006V16.0621C20.1048 16.5214 15.4172 18.7012 11.5118 22.5813C7.16365 26.9011 4.66836 32.2902 4.01061 38.6497C3.92013 39.5245 4.41175 40.3558 5.22196 40.6979C6.03216 41.04 6.9708 40.8128 7.53473 40.1379C11.8868 34.9296 15.4239 32.4067 18.1394 31.8418C20.7169 31.3057 23.1656 31.1412 25.4936 31.3327V39.0001C25.4936 39.8199 25.9939 40.5567 26.756 40.8591C27.518 41.1614 28.3874 40.9681 28.9495 40.3713L43.4559 24.9701C44.1956 24.1848 44.1791 22.9544 43.4187 22.1891L28.9123 7.59034C28.3413 7.01571 27.4801 6.84227 26.7312 7.15109Z"
          fill={color}
        />
      </svg>
    )
  }
)

IconStepNextFill.displayName = 'IconStepNextFill'

export default IconStepNextFill
