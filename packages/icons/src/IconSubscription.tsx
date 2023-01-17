import * as React from 'react'
import type { IconProps } from './types'

export const IconSubscription = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.1298 12.7544L17 19L22.239 9.27033C22.7627 8.29779 23.9756 7.93391 24.9482 8.45759C25.2928 8.64314 25.5754 8.92573 25.7609 9.27033L31 19L37.8702 12.7544C38.6875 12.0114 39.9524 12.0716 40.6954 12.8889C41.0977 13.3315 41.2809 13.931 41.1946 14.5229L38.5 33H9.49999L6.80541 14.5229C6.64601 13.4299 7.40285 12.4146 8.49586 12.2552C9.08776 12.1689 9.68722 12.352 10.1298 12.7544ZM9.99999 36H38V40H9.99999V36Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconSubscription.displayName = IconSubscriptionProps
export default IconSubscription
