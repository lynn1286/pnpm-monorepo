import * as React from 'react'
import type { IconProps } from './types'

export const IconSwap = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M41.353 13.9368L33.9519 6.12451L31.0481 8.87549L36.851 15H6.00001V19H39.1751L39.3514 18.9949C40.9262 18.9037 42.1751 17.5977 42.1751 16C42.1751 15.2324 41.8809 14.494 41.353 13.9368ZM42 33V29H8.82487L8.6486 29.0051C7.07379 29.0963 5.82487 30.4023 5.82487 32C5.82487 32.7676 6.11911 33.506 6.64702 34.0632L14.0481 41.8755L16.9519 39.1245L11.149 33H42Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconSwap.displayName = 'IconSwap'

export default IconSwap
